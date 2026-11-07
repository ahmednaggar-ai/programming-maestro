import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

const U = '٤) العوامل المنطقية والتكرار';

export const UNIT_04: Lesson[] = [
  codingLesson({
    id: 'logic-ops',
    unit: U,
    title: 'العوامل المنطقية',
    summary: '&& و || و ! في الشروط',
    level: 'متوسط',
    explanation: [
      '&& يعني الاتنين لازم يكونوا صح.',
      '|| يعني واحد منهم يكفي.',
      '! بتعكس الصح لغلط والغلط لصح.',
    ],
    exampleCode: `let age = 16;
let hasId = true;
if (age >= 15 && hasId) {
  console.log("مسموح");
}`,
    challenge:
      'خلي age=16 و hasId=true، ولو age>=15 و hasId اطبع: مسموح',
    starterCode: `let age = 16;\nlet hasId = true;\n`,
    expectedOutput: ['مسموح'],
    mustInclude: ['&&', 'if'],
    failHint: 'الشرط المنطقي مش مكتمل.',
    dialectHint:
      'استخدم && بين الشرطين: if (age >= 15 && hasId) وبعدين اطبع "مسموح".',
    successMessage: 'تمام! && بقت واضحة.',
    quiz: [
      q(
        'true && false = ؟',
        ['true', 'false', 'undefined', '0'],
        1,
        '&& عايزة الاتنين true، فلو واحد false الناتج false.',
        'صح، الناتج false.',
      ),
    ],
  }),
  codingLesson({
    id: 'loop-for-1',
    unit: U,
    title: 'العملية التكرارية (for)',
    summary: 'كرّر الطباعة بعدد مرات محدد',
    level: 'متوسط',
    explanation: [
      'for بتكرّر نفس الكود أكتر من مرة.',
      'for (let i = 1; i <= 3; i++) معناها من 1 لحد 3.',
      'جوه اللوب نطبع i كل دورة.',
    ],
    exampleCode: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
    challenge: 'اطبع الأرقام من 1 لـ 5 باستخدام for',
    starterCode: `// fore هنا\n`,
    expectedOutput: ['1', '2', '3', '4', '5'],
    mustInclude: ['for'],
    failHint: 'اللوب مش طابعة من 1 لـ 5.',
    dialectHint:
      'اكتب for (let i = 1; i <= 5; i++) وجواها console.log(i). متطبعش الأرقام بإيدك واحد واحد.',
    successMessage: 'يا سلام على اللوب!',
    quiz: [
      q(
        'i++ بتعمل إيه؟',
        ['تنقص 1', 'تزود 1', 'تصفر', 'تمسح'],
        1,
        'i++ بتزود قيمة i واحد كل دورة.',
        'صح.',
      ),
    ],
  }),
  quizLesson({
    id: 'logic-loop-review',
    unit: U,
    title: 'مراجعة الفهم: منطق وتكرار',
    summary: 'أسئلة على && و for',
    level: 'متوسط',
    explanation: ['ركز على معنى && وعدد مرات تنفيذ اللوب.'],
    quiz: [
      q(
        'false || true = ؟',
        ['false', 'true', 'null', 'خطأ'],
        1,
        '|| بتعدّي لو واحد على الأقل true.',
        'صح.',
      ),
      q(
        'for من 1 لـ 3 — هتتنفذ كام مرة؟',
        ['2', '3', '4', '1'],
        1,
        '1 ثم 2 ثم 3 = 3 مرات.',
        'صح، 3 مرات.',
      ),
    ],
  }),
];
