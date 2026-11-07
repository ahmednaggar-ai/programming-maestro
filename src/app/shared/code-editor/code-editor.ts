import {
  Component,
  ElementRef,
  ViewChild,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.scss',
})
export class CodeEditor {
  readonly value = input<string>('');
  readonly readonly = input(false);
  readonly label = input('محرر الكود');
  readonly valueChange = output<string>();
  readonly runRequest = output<void>();

  @ViewChild('textarea') private textarea?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('gutter') private gutter?: ElementRef<HTMLElement>;

  protected readonly localValue = signal('');
  protected readonly lineNumbers = computed(() => {
    const lines = Math.max(this.localValue().split('\n').length, 1);
    return Array.from({ length: lines }, (_, i) => i + 1);
  });

  constructor() {
    effect(() => {
      this.localValue.set(this.value());
    });
  }

  protected onInput(event: Event): void {
    const next = (event.target as HTMLTextAreaElement).value;
    this.localValue.set(next);
    this.valueChange.emit(next);
  }

  protected onScroll(): void {
    if (this.textarea && this.gutter) {
      this.gutter.nativeElement.scrollTop = this.textarea.nativeElement.scrollTop;
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      const el = this.textarea?.nativeElement;
      if (!el) return;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const next =
        el.value.substring(0, start) + '  ' + el.value.substring(end);
      el.value = next;
      el.selectionStart = el.selectionEnd = start + 2;
      this.localValue.set(next);
      this.valueChange.emit(next);
      return;
    }

    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      this.runRequest.emit();
    }
  }
}
