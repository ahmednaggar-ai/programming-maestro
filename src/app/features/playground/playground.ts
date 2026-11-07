import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeRunnerService, RunResult } from '../../core/services/code-runner.service';
import { CodeEditor } from '../../shared/code-editor/code-editor';
import { ConsoleOutput } from '../../shared/console-output/console-output';

const DEFAULT_CODE = `// جرّب أي كود JavaScript هنا
console.log("مرحباً من المحرر الحر");

let x = 5;
let y = 3;
console.log(x + y);
`;

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [RouterLink, CodeEditor, ConsoleOutput],
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
})
export class Playground {
  private readonly runner = inject(CodeRunnerService);

  protected readonly code = signal(DEFAULT_CODE);
  protected readonly runResult = signal<RunResult | null>(null);

  protected onCodeChange(value: string): void {
    this.code.set(value);
  }

  protected runCode(): void {
    this.runResult.set(this.runner.run(this.code()));
  }

  protected clearOutput(): void {
    this.runResult.set(null);
  }

  protected resetCode(): void {
    this.code.set(DEFAULT_CODE);
    this.runResult.set(null);
  }
}
