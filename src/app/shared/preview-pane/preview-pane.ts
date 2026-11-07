import { Component, effect, input, output, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { inject } from '@angular/core';

@Component({
  selector: 'app-preview-pane',
  standalone: true,
  templateUrl: './preview-pane.html',
  styleUrl: './preview-pane.scss',
})
export class PreviewPane {
  private readonly sanitizer = inject(DomSanitizer);

  readonly html = input('');
  readonly css = input('');
  readonly htmlChange = output<string>();
  readonly cssChange = output<string>();

  protected readonly tab = signal<'html' | 'css'>('html');
  protected readonly localHtml = signal('');
  protected readonly localCss = signal('');
  protected readonly previewUrl = signal<SafeResourceUrl | null>(null);

  constructor() {
    effect(() => {
      this.localHtml.set(this.html());
      this.localCss.set(this.css());
      this.refreshPreview();
    });
  }

  protected setTab(tab: 'html' | 'css'): void {
    this.tab.set(tab);
  }

  protected onHtmlInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.localHtml.set(value);
    this.htmlChange.emit(value);
    this.refreshPreview();
  }

  protected onCssInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.localCss.set(value);
    this.cssChange.emit(value);
    this.refreshPreview();
  }

  private refreshPreview(): void {
    const doc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${this.localCss()}</style></head><body>${this.localHtml()}</body></html>`;
    const url = URL.createObjectURL(new Blob([doc], { type: 'text/html' }));
    this.previewUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }
}
