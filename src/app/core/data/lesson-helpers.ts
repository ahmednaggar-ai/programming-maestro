import {
  Lesson,
  LessonCheck,
  LessonLevel,
  PreviewChecks,
  QuizQuestion,
  StepKind,
} from '../models/lesson.model';

export function q(
  prompt: string,
  choices: string[],
  correctIndex: number,
  explainWrong: string,
  explainRight: string,
): QuizQuestion {
  return { prompt, choices, correctIndex, explainWrong, explainRight };
}

export function codingLesson(opts: {
  id: string;
  unit: string;
  title: string;
  summary: string;
  level?: LessonLevel;
  maxScore?: number;
  explanation: string[];
  exampleCode: string;
  challenge: string;
  starterCode: string;
  expectedOutput: string[];
  mustInclude?: string[];
  failHint: string;
  dialectHint: string;
  successMessage: string;
  quiz?: QuizQuestion[];
  kind?: StepKind;
}): Lesson {
  const check: LessonCheck = {
    expectedOutput: opts.expectedOutput,
    mustInclude: opts.mustInclude,
    failHint: opts.failHint,
    dialectHint: opts.dialectHint,
    successMessage: opts.successMessage,
  };
  return {
    id: opts.id,
    order: 0,
    unit: opts.unit,
    title: opts.title,
    summary: opts.summary,
    kind: opts.kind ?? 'coding',
    level: opts.level ?? 'مبتدئ',
    maxScore: opts.maxScore ?? 10,
    explanation: opts.explanation,
    exampleCode: opts.exampleCode,
    challenge: opts.challenge,
    starterCode: opts.starterCode,
    check,
    quiz: opts.quiz,
  };
}

export function quizLesson(opts: {
  id: string;
  unit: string;
  title: string;
  summary: string;
  level?: LessonLevel;
  maxScore?: number;
  explanation: string[];
  quiz: QuizQuestion[];
}): Lesson {
  return {
    id: opts.id,
    order: 0,
    unit: opts.unit,
    title: opts.title,
    summary: opts.summary,
    kind: 'quiz',
    level: opts.level ?? 'مبتدئ',
    maxScore: opts.maxScore ?? 10,
    explanation: opts.explanation,
    quiz: opts.quiz,
  };
}

export function htmlCssLesson(opts: {
  id: string;
  unit: string;
  title: string;
  summary: string;
  level?: LessonLevel;
  maxScore?: number;
  explanation: string[];
  challenge: string;
  starterHtml: string;
  starterCss: string;
  previewChecks: PreviewChecks;
  quiz?: QuizQuestion[];
}): Lesson {
  return {
    id: opts.id,
    order: 0,
    unit: opts.unit,
    title: opts.title,
    summary: opts.summary,
    kind: 'html-css',
    level: opts.level ?? 'مبتدئ',
    maxScore: opts.maxScore ?? 10,
    explanation: opts.explanation,
    challenge: opts.challenge,
    starterHtml: opts.starterHtml,
    starterCss: opts.starterCss,
    previewChecks: opts.previewChecks,
    quiz: opts.quiz,
  };
}
