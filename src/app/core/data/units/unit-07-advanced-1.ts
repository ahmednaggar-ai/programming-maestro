import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

export const UNIT_07: Lesson[] = [
  codingLesson({
    id: 'cond-4',
    unit: '٩) شروط وتكرار ودوال (متقدم)',
    title: 'الشروط (4)',
    summary: 'شرط على رقم زوجي/فردي بالباقي',
    level: 'متوسط',
    explanation: [
      'n % 2 == 0 معناها الرقم زوجي.',
      'نستخدم if/else للتفريع.',
    ],
    exampleCode: `let n = 4;
if (n % 2 === 0) {
  console.log("زوجي");
} else {
  console.log("فردي");
}`,
    challenge: 'خلي n = 7 واطبع فردي أو زوجي حسب الباقي',
    starterCode: `let n = 7;\n`,
    expectedOutput: ['فردي'],
    mustInclude: ['%', 'if'],
    failHint: 'التفريق زوجي/فردي مش شغال صح.',
    dialectHint:
      '7 فردي عشان 7 % 2 = 1. استخدم if (n % 2 === 0) ... else واطبع "فردي".',
    successMessage: 'صح، فهمت الباقي كويس.',
    quiz: [
      q('8 % 2 بيساوي؟', ['1', '0', '2', '8'], 1, 'أي زوجي باقيه على 2 = 0.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'loop-2',
    unit: '٩) شروط وتكرار ودوال (متقدم)',
    title: 'التكرار (2)',
    summary: 'اطبع الأرقام الزوجية من 2 لـ 8',
    level: 'متوسط',
    explanation: [
      'تقدر تزود العداد بـ i += 2 عشان تتخطى فردي.',
      'أو تستخدم شرط جوه اللوب.',
    ],
    exampleCode: `for (let i = 2; i <= 6; i += 2) {
  console.log(i);
}`,
    challenge: 'اطبع 2 ثم 4 ثم 6 ثم 8 بـ for',
    starterCode: `// زوجي\n`,
    expectedOutput: ['2', '4', '6', '8'],
    mustInclude: ['for'],
    failHint: 'مش طالع التسلسل الزوجي المطلوب.',
    dialectHint: 'جرّب for (let i = 2; i <= 8; i += 2) و console.log(i).',
    successMessage: 'لوب نظيف!',
    quiz: [
      q('i += 2 معناها؟', ['i = 2', 'i = i + 2', 'i++', 'i = i - 2'], 1, 'بتزود اتنين على طول.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'fn-2',
    unit: '٩) شروط وتكرار ودوال (متقدم)',
    title: 'الدوال (2)',
    summary: 'دالة بتاخد باراميتر',
    level: 'متوسط',
    explanation: [
      'الباراميتر قيمة بتدخل للدالة.',
      'function double(n) { console.log(n * 2); }',
      'double(5) تطبع 10',
    ],
    exampleCode: `function double(n) {
  console.log(n * 2);
}
double(4);`,
    challenge: 'اعمل دالة square(n) تطبع n*n واستدعيها بـ 6',
    starterCode: `// square\n`,
    expectedOutput: ['36'],
    mustInclude: ['function', 'square'],
    failHint: 'الدالة أو الاستدعاء مش مظبوطين.',
    dialectHint: 'function square(n) { console.log(n * n); } وبعدين square(6);',
    successMessage: 'دالة بالباراميتر تمام.',
    quiz: [
      q('الباراميتر هو؟', ['اسم الملف', 'قيمة داخلة للدالة', 'لون', 'HTML'], 1, 'قيمة بنبعتها جوه الأقواس.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'adv-review-1',
    unit: '٩) شروط وتكرار ودوال (متقدم)',
    title: 'مراجعة الفهم',
    summary: 'مراجعة شروط + تكرار + دوال',
    level: 'متوسط',
    explanation: ['راجع % و i+=2 والباراميتر.'],
    quiz: [
      q('5 % 2 =', ['0', '1', '2', '5'], 1, 'فردي باقيه 1.', 'صح.'),
      q('استدعاء square(3) لو بتطبع n*n يطلع؟', ['6', '9', '3', '33'], 1, '3×3=9.', 'صح.'),
    ],
  }),
];
