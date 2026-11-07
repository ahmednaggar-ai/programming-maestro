import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

export const UNIT_08: Lesson[] = [
  codingLesson({
    id: 'loop-3',
    unit: '١٠) تكرار ومصفوفات',
    title: 'التكرار (3)',
    summary: 'اجمع أرقام بلوب',
    level: 'متوسط',
    explanation: [
      'نقدر نجمّع قيم جوه اللوب في متغير sum.',
      'كل دورة: sum = sum + i',
    ],
    exampleCode: `let sum = 0;
for (let i = 1; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);`,
    challenge: 'اجمع من 1 لـ 4 واطبع المجموع (10)',
    starterCode: `let sum = 0;\n`,
    expectedOutput: ['10'],
    mustInclude: ['for', 'sum'],
    failHint: 'المجموع مش 10.',
    dialectHint: 'لف من 1 لـ 4 وزوّد sum، وبعد اللوب اطبع sum. 1+2+3+4=10.',
    successMessage: 'حساب اللوب تمام.',
    quiz: [
      q('قبل اللوب sum غالبًا بيبدأ؟', ['1', '0', 'null', '10'], 1, 'بنبدأ من صفر عشان نزوّد عليه.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'arrays-2',
    unit: '١٠) تكرار ومصفوفات',
    title: 'المصفوفات (2)',
    summary: 'اطبع length المصفوفة',
    level: 'متوسط',
    explanation: [
      'arr.length بتقولك عدد العناصر.',
      'مفيدة مع اللوب عشان تلف على كل العناصر.',
    ],
    exampleCode: `let a = [1, 2, 3];
console.log(a.length);`,
    challenge: 'اعمل مصفوفة فيها 4 عناصر واطبع length',
    starterCode: `// length\n`,
    expectedOutput: ['4'],
    mustInclude: ['.length'],
    failHint: 'length مش طالعة 4.',
    dialectHint: 'خلّي المصفوفة 4 عناصر زي [1,2,3,4] واطبع اسمها.length',
    successMessage: 'عرفت تقيس طول المصفوفة.',
    quiz: [
      q('[10,20].length =', ['10', '2', '20', '0'], 1, 'عنصرين يعني 2.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'arr-review',
    unit: '١٠) تكرار ومصفوفات',
    title: 'مراجعة الفهم',
    summary: 'مراجعة الجمع و length',
    level: 'متوسط',
    explanation: ['length و الجمع باللوب.'],
    quiz: [
      q('آخر index لمصفوفة length=3؟', ['3', '2', '1', '0'], 1, 'من 0 لـ 2.', 'صح.'),
      q('مجموع 1..3؟', ['3', '6', '9', '1'], 1, '1+2+3=6.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'for-of',
    unit: '١١) for...of وشروط',
    title: 'for of',
    summary: 'لف على عناصر المصفوفة بـ for...of',
    level: 'متوسط',
    explanation: [
      'for (const item of arr) بتديك كل عنصر بالترتيب.',
      'أسهل من اللوب التقليدية لو مش محتاج الـ index.',
    ],
    exampleCode: `let nums = [1, 2];
for (const n of nums) {
  console.log(n);
}`,
    challenge: 'لف على ["أ","ب","ج"] واطبع كل حرف',
    starterCode: `let letters = ["أ", "ب", "ج"];\n`,
    expectedOutput: ['أ', 'ب', 'ج'],
    mustInclude: ['for', 'of'],
    failHint: ' fore...of مش شغال صح.',
    dialectHint: 'اكتب for (const x of letters) { console.log(x); }',
    successMessage: 'for...of تمام!',
    quiz: [
      q('for...of بيلف على؟', ['المفاتيح بس', 'قيم العناصر', 'الملفات', 'الألوان'], 1, 'بيلّف على القيم.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'cond-5',
    unit: '١١) for...of وشروط',
    title: 'الشروط (5)',
    summary: 'شرط داخل لوب',
    level: 'متقدم',
    explanation: [
      'ممكن جوه for نحط if عشان نطبع قيم معينة بس.',
      'مثال: اطبع الأرقام أكبر من 3.',
    ],
    exampleCode: `for (let i = 1; i <= 5; i++) {
  if (i > 3) {
    console.log(i);
  }
}`,
    challenge: 'من 1 لـ 5 اطبع بس الأرقام الأكبر من 3',
    starterCode: `// شرط جوه لوب\n`,
    expectedOutput: ['4', '5'],
    mustInclude: ['for', 'if'],
    failHint: 'مش طابع 4 و 5 بس.',
    dialectHint: 'لوب من 1 لـ 5، وجواها if (i > 3) console.log(i)',
    successMessage: 'شرط جوه لوب زي المحترفين.',
    quiz: [
      q('كام رقم هيتعرض لو > 3 من 1..5؟', ['5', '2', '3', '1'], 1, '4 و 5 بس.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'forof-cond-review',
    unit: '١١) for...of وشروط',
    title: 'مراجعة الفهم',
    summary: 'راجع for...of والشرط جوه اللوب',
    level: 'متوسط',
    explanation: [' fore of + if داخل for.'],
    quiz: [
      q('for...of محتاج index؟', ['دايمًا', 'لأ مش لازم', 'ممنوع', 'بس مع HTML'], 1, 'مش لازم index.', 'صح.'),
    ],
  }),
];
