import { Component, input } from '@angular/core';

@Component({
  selector: 'app-console-output',
  standalone: true,
  templateUrl: './console-output.html',
  styleUrl: './console-output.scss',
})
export class ConsoleOutput {
  readonly logs = input<string[]>([]);
  readonly error = input<string | null>(null);
  readonly emptyText = input('شغّل الكود لتظهر النتائج هنا');
}
