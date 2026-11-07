import { Lesson } from '../models/lesson.model';
import { UNIT_01 } from './units/unit-01-intro';
import { UNIT_02 } from './units/unit-02-basics';
import { UNIT_03 } from './units/unit-03-conditions';
import { UNIT_04 } from './units/unit-04-logic-loops';
import { UNIT_05 } from './units/unit-05-functions-types-arrays';
import { UNIT_06 } from './units/unit-06-html-css-1';
import { UNIT_07 } from './units/unit-07-advanced-1';
import { UNIT_08 } from './units/unit-08-arrays-forof';
import { UNIT_09 } from './units/unit-09-fn-flowchart-html2';
import { UNIT_10 } from './units/unit-10-switch-while';

const RAW: Lesson[] = [
  ...UNIT_01,
  ...UNIT_02,
  ...UNIT_03,
  ...UNIT_04,
  ...UNIT_05,
  ...UNIT_06,
  ...UNIT_07,
  ...UNIT_08,
  ...UNIT_09,
  ...UNIT_10,
];

export const LESSONS: Lesson[] = RAW.map((lesson, index) => ({
  ...lesson,
  order: index + 1,
}));

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function getNextLessonId(currentId: string): string | null {
  const current = getLessonById(currentId);
  if (!current) return null;
  const next = LESSONS.find((lesson) => lesson.order === current.order + 1);
  return next?.id ?? null;
}

export function getLessonsByUnit(): { unit: string; lessons: Lesson[] }[] {
  const map = new Map<string, Lesson[]>();
  for (const lesson of LESSONS) {
    const list = map.get(lesson.unit) ?? [];
    list.push(lesson);
    map.set(lesson.unit, list);
  }
  return Array.from(map.entries()).map(([unit, lessons]) => ({ unit, lessons }));
}
