import { Component, computed, input } from '@angular/core';

export type BrandLogoVariant = 'full' | 'compact' | 'mark';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.scss',
})
export class BrandLogo {
  /** full = emblem + name, compact = name row for header, mark = emblem only */
  readonly variant = input<BrandLogoVariant>('full');
  readonly alt = input(
    'مستر حسام النجار — المايسترو، مدير عام بوزارة التربية والتعليم',
  );

  private static nextId = 0;
  protected readonly uid = `bl${BrandLogo.nextId++}`;

  protected readonly viewBox = computed(() => {
    switch (this.variant()) {
      case 'mark':
        return '220 70 460 260';
      case 'compact':
        return '0 300 900 220';
      default:
        return '0 0 900 560';
    }
  });
}
