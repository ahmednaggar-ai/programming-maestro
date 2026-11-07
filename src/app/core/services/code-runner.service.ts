import { Injectable } from '@angular/core';
import { FailReason, LessonCheck, PreviewChecks } from '../models/lesson.model';

export interface RunResult {
  logs: string[];
  error: string | null;
  ok: boolean;
}

export interface CheckResult {
  passed: boolean;
  message: string;
  dialectHint: string | null;
  reason: FailReason | null;
  run: RunResult;
}

@Injectable({ providedIn: 'root' })
export class CodeRunnerService {
  run(code: string): RunResult {
    const logs: string[] = [];

    const fakeConsole = {
      log: (...args: unknown[]) => {
        logs.push(args.map((arg) => this.stringify(arg)).join(' '));
      },
      warn: (...args: unknown[]) => {
        logs.push(args.map((arg) => this.stringify(arg)).join(' '));
      },
      error: (...args: unknown[]) => {
        logs.push(args.map((arg) => this.stringify(arg)).join(' '));
      },
    };

    try {
      const runner = new Function('console', `"use strict";\n${code}`);
      runner(fakeConsole);
      return { logs, error: null, ok: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { logs, error: this.translateError(message), ok: false };
    }
  }

  check(code: string, lessonCheck: LessonCheck): CheckResult {
    if (lessonCheck.mustInclude?.length) {
      for (const token of lessonCheck.mustInclude) {
        if (!code.includes(token)) {
          return {
            passed: false,
            message: lessonCheck.failHint,
            dialectHint: lessonCheck.dialectHint,
            reason: 'missingToken',
            run: { logs: [], error: null, ok: true },
          };
        }
      }
    }

    const run = this.run(code);
    if (!run.ok) {
      return {
        passed: false,
        message: run.error ?? 'في مشكلة في تشغيل الكود',
        dialectHint: `${lessonCheck.dialectHint}\n\nتفاصيل الغلط: ${run.error}`,
        reason: 'runtimeError',
        run,
      };
    }

    const actual = run.logs.map((line) => line.trim());
    const expected = lessonCheck.expectedOutput.map((line) => line.trim());
    const passed =
      actual.length === expected.length &&
      actual.every((line, index) => line === expected[index]);

    return {
      passed,
      message: passed ? lessonCheck.successMessage : lessonCheck.failHint,
      dialectHint: passed ? null : lessonCheck.dialectHint,
      reason: passed ? null : 'wrongOutput',
      run,
    };
  }

  checkPreview(
    html: string,
    css: string,
    checks: PreviewChecks,
  ): CheckResult {
    for (const token of checks.mustIncludeHtml ?? []) {
      if (!html.includes(token)) {
        return {
          passed: false,
          message: checks.failHint,
          dialectHint: checks.dialectHint,
          reason: 'previewMismatch',
          run: { logs: [], error: null, ok: true },
        };
      }
    }
    for (const token of checks.mustIncludeCss ?? []) {
      if (!css.includes(token)) {
        return {
          passed: false,
          message: checks.failHint,
          dialectHint: checks.dialectHint,
          reason: 'previewMismatch',
          run: { logs: [], error: null, ok: true },
        };
      }
    }
    return {
      passed: true,
      message: checks.successMessage,
      dialectHint: null,
      reason: null,
      run: { logs: ['المعاينة تمام'], error: null, ok: true },
    };
  }

  private stringify(value: unknown): string {
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }

  private translateError(message: string): string {
    if (message.includes('is not defined')) {
      return `في حاجة مش معرّفة في الكود: ${message}`;
    }
    if (message.includes('Unexpected token')) {
      return `في رمز مكتوب غلط أو ناقص (أقواس/فاصلة): ${message}`;
    }
    if (message.includes('Unexpected end')) {
      return 'الكود ناقص من الآخر — راجع الأقواس { } و ( ).';
    }
    if (message.includes('Unexpected identifier')) {
      return `في كلمة مكتوبة في مكان غلط: ${message}`;
    }
    return message;
  }
}
