import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LESSONS, getLessonsByUnit } from '../../core/data/lessons';
import { ProgressService } from '../../core/services/progress.service';

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lessons-list.html',
  styleUrl: './lessons-list.scss',
})
export class LessonsList {
  private readonly progress = inject(ProgressService);

  protected readonly units = getLessonsByUnit();
  protected readonly totalLessons = LESSONS.length;
  protected readonly completedCount = this.progress.completedCount;
  protected readonly totalEarned = this.progress.totalEarned;
  protected readonly totalPossible = this.progress.totalPossible;

  protected readonly progressPercent = computed(() => {
    const possible = this.totalPossible();
    if (possible <= 0) return 0;
    return Math.round((this.totalEarned() / possible) * 100);
  });

  protected lessonScore(id: string): number {
    return this.progress.getLesson(id).bestTotal;
  }

  protected isCompleted(id: string): boolean {
    return this.progress.getLesson(id).completed;
  }
}
