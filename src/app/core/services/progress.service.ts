import { Injectable, computed, signal } from '@angular/core';
import { LESSONS } from '../data/lessons';

export interface LessonProgress {
  quizScore: number;
  codeScore: number;
  bestTotal: number;
  completed: boolean;
}

type ProgressMap = Record<string, LessonProgress>;

const STORAGE_KEY = 'maestro-progress';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly state = signal<ProgressMap>(this.read());

  readonly totalEarned = computed(() =>
    Object.values(this.state()).reduce((sum, item) => sum + item.bestTotal, 0),
  );

  readonly totalPossible = computed(() =>
    LESSONS.reduce((sum, lesson) => sum + lesson.maxScore, 0),
  );

  readonly completedCount = computed(
    () => Object.values(this.state()).filter((item) => item.completed).length,
  );

  getLesson(id: string): LessonProgress {
    return (
      this.state()[id] ?? {
        quizScore: 0,
        codeScore: 0,
        bestTotal: 0,
        completed: false,
      }
    );
  }

  recordQuiz(lessonId: string, score: number, maxQuiz: number): void {
    const current = this.getLesson(lessonId);
    const quizScore = Math.max(current.quizScore, Math.min(score, maxQuiz));
    this.saveLesson(lessonId, { ...current, quizScore });
  }

  recordCode(lessonId: string, score: number, maxCode: number): void {
    const current = this.getLesson(lessonId);
    const codeScore = Math.max(current.codeScore, Math.min(score, maxCode));
    this.saveLesson(lessonId, { ...current, codeScore });
  }

  markCompleted(lessonId: string): void {
    const current = this.getLesson(lessonId);
    const lesson = LESSONS.find((item) => item.id === lessonId);
    const bestTotal = Math.min(
      lesson?.maxScore ?? current.quizScore + current.codeScore,
      current.quizScore + current.codeScore,
    );
    this.saveLesson(lessonId, {
      ...current,
      bestTotal: Math.max(current.bestTotal, bestTotal),
      completed: true,
    });
  }

  private saveLesson(lessonId: string, progress: LessonProgress): void {
    const lesson = LESSONS.find((item) => item.id === lessonId);
    const bestTotal = Math.max(
      progress.bestTotal,
      Math.min(
        lesson?.maxScore ?? progress.quizScore + progress.codeScore,
        progress.quizScore + progress.codeScore,
      ),
    );
    const next: ProgressMap = {
      ...this.state(),
      [lessonId]: { ...progress, bestTotal },
    };
    this.state.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  private read(): ProgressMap {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw) as ProgressMap;
    } catch {
      return {};
    }
  }
}
