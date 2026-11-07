export type StepKind = 'coding' | 'quiz' | 'html-css' | 'flowchart';

export type LessonLevel = 'مبتدئ' | 'متوسط' | 'متقدم';

export type FailReason = 'missingToken' | 'wrongOutput' | 'runtimeError' | 'previewMismatch';

export interface LessonCheck {
  /** Exact console.log lines expected (trimmed, order matters). */
  expectedOutput: string[];
  /** Optional: code must include this substring (case-sensitive). */
  mustInclude?: string[];
  /** Short fail message (shown before revealing dialect hint). */
  failHint: string;
  /** Egyptian colloquial explanation behind «إيه المشكلة؟». */
  dialectHint: string;
  /** Message shown when the student succeeds. */
  successMessage: string;
}

export interface QuizQuestion {
  prompt: string;
  choices: string[];
  correctIndex: number;
  /** عامية مصرية لما يغلط */
  explainWrong: string;
  explainRight: string;
}

export interface PreviewChecks {
  mustIncludeHtml?: string[];
  mustIncludeCss?: string[];
  dialectHint: string;
  failHint: string;
  successMessage: string;
}

export interface Lesson {
  id: string;
  order: number;
  unit: string;
  title: string;
  summary: string;
  kind: StepKind;
  level: LessonLevel;
  /** Max points for this lesson (quiz + code combined). */
  maxScore: number;
  explanation: string[];
  exampleCode?: string;
  challenge?: string;
  starterCode?: string;
  check?: LessonCheck;
  /** Understanding question(s) — used in coding steps and quiz reviews. */
  quiz?: QuizQuestion[];
  starterHtml?: string;
  starterCss?: string;
  previewChecks?: PreviewChecks;
}
