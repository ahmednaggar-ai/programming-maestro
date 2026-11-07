import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { getLessonById, getNextLessonId } from '../../core/data/lessons';
import { QuizQuestion } from '../../core/models/lesson.model';
import { CodeRunnerService, RunResult } from '../../core/services/code-runner.service';
import { ProgressService } from '../../core/services/progress.service';
import { CodeEditor } from '../../shared/code-editor/code-editor';
import { ConsoleOutput } from '../../shared/console-output/console-output';
import { PreviewPane } from '../../shared/preview-pane/preview-pane';

type Stage = 'explain' | 'quiz' | 'practice' | 'done';

@Component({
  selector: 'app-lesson-page',
  standalone: true,
  imports: [RouterLink, CodeEditor, ConsoleOutput, PreviewPane],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.scss',
})
export class LessonPage {
  private readonly route = inject(ActivatedRoute);
  private readonly runner = inject(CodeRunnerService);
  private readonly progress = inject(ProgressService);

  private readonly lessonId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  protected readonly lesson = computed(() => getLessonById(this.lessonId()));
  protected readonly nextLessonId = computed(() => {
    const id = this.lessonId();
    return id ? getNextLessonId(id) : null;
  });

  protected readonly stage = signal<Stage>('explain');
  protected readonly showExample = signal(false);

  protected readonly quizIndex = signal(0);
  protected readonly selectedChoice = signal<number | null>(null);
  protected readonly quizFeedback = signal<{
    ok: boolean;
    text: string;
  } | null>(null);
  protected readonly quizCorrectCount = signal(0);
  protected readonly showQuizHint = signal(false);

  protected readonly code = signal('');
  protected readonly html = signal('');
  protected readonly css = signal('');
  protected readonly runResult = signal<RunResult | null>(null);
  protected readonly practicePassed = signal(false);
  protected readonly practiceMessage = signal<string | null>(null);
  protected readonly dialectHint = signal<string | null>(null);
  protected readonly showDialect = signal(false);

  protected readonly earnedScore = signal(0);

  protected readonly currentQuestion = computed<QuizQuestion | null>(() => {
    const lesson = this.lesson();
    const list = lesson?.quiz ?? [];
    return list[this.quizIndex()] ?? null;
  });

  protected readonly hasQuiz = computed(() => (this.lesson()?.quiz?.length ?? 0) > 0);
  protected readonly isPreviewLesson = computed(() => {
    const kind = this.lesson()?.kind;
    return kind === 'html-css';
  });
  protected readonly isQuizOnly = computed(() => this.lesson()?.kind === 'quiz');

  constructor() {
    effect(() => {
      const current = this.lesson();
      this.stage.set('explain');
      this.showExample.set(false);
      this.quizIndex.set(0);
      this.selectedChoice.set(null);
      this.quizFeedback.set(null);
      this.quizCorrectCount.set(0);
      this.showQuizHint.set(false);
      this.code.set(current?.starterCode ?? '');
      this.html.set(current?.starterHtml ?? '');
      this.css.set(current?.starterCss ?? '');
      this.runResult.set(null);
      this.practicePassed.set(false);
      this.practiceMessage.set(null);
      this.dialectHint.set(null);
      this.showDialect.set(false);
      this.earnedScore.set(0);
    });
  }

  protected toggleExample(): void {
    this.showExample.update((v) => !v);
  }

  protected goExplainNext(): void {
    if (this.hasQuiz()) {
      this.stage.set('quiz');
      return;
    }
    if (this.isQuizOnly()) {
      this.finishLesson(0, 0);
      return;
    }
    this.stage.set('practice');
  }

  protected selectChoice(index: number): void {
    if (this.quizFeedback()) return;
    this.selectedChoice.set(index);
  }

  protected submitQuizAnswer(): void {
    const question = this.currentQuestion();
    const choice = this.selectedChoice();
    if (!question || choice === null) return;

    const ok = choice === question.correctIndex;
    this.quizFeedback.set({
      ok,
      text: ok
        ? question.explainRight
        : 'الإجابة دي مش صح. دوس «إيه المشكلة؟» لو حابب تعرف الغلط بالعامية.',
    });
    this.showQuizHint.set(false);
    if (ok) {
      this.quizCorrectCount.update((n) => n + 1);
    }
  }

  protected revealQuizHint(): void {
    this.showQuizHint.set(true);
  }

  protected nextQuizOrPractice(): void {
    const lesson = this.lesson();
    if (!lesson?.quiz) return;
    const next = this.quizIndex() + 1;
    if (next < lesson.quiz.length) {
      this.quizIndex.set(next);
      this.selectedChoice.set(null);
      this.quizFeedback.set(null);
      this.showQuizHint.set(false);
      return;
    }

    const quizMax = this.quizMaxPoints();
    const quizScore = this.scaleScore(this.quizCorrectCount(), lesson.quiz.length, quizMax);
    this.progress.recordQuiz(lesson.id, quizScore, quizMax);

    if (this.isQuizOnly()) {
      this.finishLesson(quizScore, 0);
      return;
    }
    this.stage.set('practice');
  }

  protected onCodeChange(value: string): void {
    this.code.set(value);
    this.resetPracticeFeedback();
  }

  protected onHtmlChange(value: string): void {
    this.html.set(value);
    this.resetPracticeFeedback();
  }

  protected onCssChange(value: string): void {
    this.css.set(value);
    this.resetPracticeFeedback();
  }

  protected runCode(): void {
    this.runResult.set(this.runner.run(this.code()));
  }

  protected checkPractice(): void {
    const lesson = this.lesson();
    if (!lesson) return;

    if (this.isPreviewLesson()) {
      if (!lesson.previewChecks) return;
      const result = this.runner.checkPreview(
        this.html(),
        this.css(),
        lesson.previewChecks,
      );
      this.applyPracticeResult(result.passed, result.message, result.dialectHint);
      return;
    }

    if (!lesson.check) return;
    const result = this.runner.check(this.code(), lesson.check);
    this.runResult.set(result.run);
    this.applyPracticeResult(result.passed, result.message, result.dialectHint);
  }

  protected revealDialect(): void {
    this.showDialect.set(true);
  }

  protected resetPractice(): void {
    const lesson = this.lesson();
    if (!lesson) return;
    this.code.set(lesson.starterCode ?? '');
    this.html.set(lesson.starterHtml ?? '');
    this.css.set(lesson.starterCss ?? '');
    this.runResult.set(null);
    this.resetPracticeFeedback();
  }

  protected completeAfterPractice(): void {
    const lesson = this.lesson();
    if (!lesson || !this.practicePassed()) return;

    const quizMax = this.quizMaxPoints();
    const codeMax = lesson.maxScore - quizMax;
    const quizScore = this.hasQuiz()
      ? this.scaleScore(this.quizCorrectCount(), lesson.quiz!.length, quizMax)
      : 0;
    const codeScore = codeMax;
    this.progress.recordCode(lesson.id, codeScore, codeMax);
    this.finishLesson(quizScore, codeScore);
  }

  private applyPracticeResult(
    passed: boolean,
    message: string,
    dialect: string | null,
  ): void {
    this.practicePassed.set(passed);
    this.practiceMessage.set(message);
    this.dialectHint.set(dialect);
    this.showDialect.set(false);
  }

  private resetPracticeFeedback(): void {
    this.practicePassed.set(false);
    this.practiceMessage.set(null);
    this.dialectHint.set(null);
    this.showDialect.set(false);
  }

  private finishLesson(quizScore: number, codeScore: number): void {
    const lesson = this.lesson();
    if (!lesson) return;
    const total = Math.min(lesson.maxScore, quizScore + codeScore);
    this.earnedScore.set(total);
    this.progress.recordQuiz(lesson.id, quizScore, this.quizMaxPoints());
    if (codeScore > 0) {
      this.progress.recordCode(lesson.id, codeScore, lesson.maxScore - this.quizMaxPoints());
    }
    this.progress.markCompleted(lesson.id);
    this.stage.set('done');
  }

  private quizMaxPoints(): number {
    const lesson = this.lesson();
    if (!lesson) return 0;
    if (lesson.kind === 'quiz') return lesson.maxScore;
    if (!lesson.quiz?.length) return 0;
    return Math.floor(lesson.maxScore / 2);
  }

  private scaleScore(correct: number, total: number, maxPoints: number): number {
    if (total <= 0 || maxPoints <= 0) return 0;
    return Math.round((correct / total) * maxPoints);
  }
}
