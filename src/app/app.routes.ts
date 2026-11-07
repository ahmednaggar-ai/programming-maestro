import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/lessons-list/lessons-list').then((m) => m.LessonsList),
  },
  {
    path: 'lesson/:id',
    loadComponent: () =>
      import('./features/lesson/lesson-page').then((m) => m.LessonPage),
  },
  {
    path: 'playground',
    loadComponent: () =>
      import('./features/playground/playground').then((m) => m.Playground),
  },
  { path: '**', redirectTo: '' },
];
