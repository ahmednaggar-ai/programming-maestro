import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { BrandLogo } from './shared/brand-logo/brand-logo';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BrandLogo],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly themeService = inject(ThemeService);

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
