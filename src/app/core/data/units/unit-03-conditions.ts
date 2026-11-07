import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

const U = '٣) الشروط';

export const UNIT_03: Lesson[] = [
  codingLesson({
    id: 'cond-if',
    unit: U,
    title: 'جملة if',
    summary: 'نفّذ أمر لو الشرط اتحقق',
    level: 'متوسط',
    explanation: [
      'if معناها: لو الشرط صح، نفّذ اللي جوه { }.',
      'مثال: if (score >= 50) { console.log("ناجح"); }',
      'لو الشرط غلط، الكود جوه if مش هيتنفذ.',
    ],
    exampleCode: `let score = 80;
if (score >= 50) {
  console.log("ناجح");
}`,
    challenge: 'خلي score = 90 ولو أكبر من أو يساوي 50 اطبع: ناجح',
    starterCode: `let score = 90;\n`,
    expectedOutput: ['ناجح'],
    mustInclude: ['if', 'score'],
    failHint: 'الشرط أو الطباعة لسه مش صح.',
    dialectHint:
      'استخدم if (score >= 50) وجواها console.log("ناجح"). متتنساش الأقواس المجعدة { }.',
    successMessage: 'ممتاز! if بقت واضحة.',
    quiz: [
      q(
        'لو الشرط في if بقى false، الكود جواه؟',
        ['بيتنفذ', 'مش بيتنفذ', 'بيمسّح الملف', 'بيكرّر'],
        1,
        'لو الشرط غلط، if بتعدّي ومش بتنفّذ اللي جواها.',
        'صح، مش بيتنفذ.',
      ),
    ],
  }),
  codingLesson({
    id: 'cond-if-else',
    unit: U,
    title: 'if / else و else if',
    summary: 'اختيارات متعددة حسب الشرط',
    level: 'متوسط',
    explanation: [
      'else بتتنفذ لو if الأولى مانفعتش.',
      'else if بنزود شرط تاني في النص.',
      'ترتيب الشروط مهم: الأول اللي يتحقق هو اللي يتنفذ.',
    ],
    exampleCode: `let n = 7;
if (n > 10) {
  console.log("كبير");
} else if (n > 5) {
  console.log("متوسط");
} else {
  console.log("صغير");
}`,
    challenge:
      'خلي grade = 85: لو >= 90 اطبع ممتاز، else if >= 50 اطبع ناجح، غير كده راسب',
    starterCode: `let grade = 85;\n`,
    expectedOutput: ['ناجح'],
    mustInclude: ['if', 'else'],
    failHint: 'سلسلة الشروط مش مظبوطة أو الرسالة غلط.',
    dialectHint:
      'grade = 85 فه تدخل على else if (>= 50) وتطبع "ناجح". تأكد إنك كاتب else if صح ومش طابع ممتاز.',
    successMessage: 'يا وحش! if/else ماشية تمام.',
    quiz: [
      q(
        'متى بيتنفذ else؟',
        ['دايمًا', 'لو كل اللي قبله مانفعش', 'قبل if', 'مع اللوب'],
        1,
        'else هو الملاذ الأخير لما الشروط اللي قبله تبقى غلط.',
        'صح كده.',
      ),
    ],
  }),
  quizLesson({
    id: 'cond-review-1',
    unit: U,
    title: 'مراجعة الفهم: الشروط',
    summary: 'ثبت معلومات if و else',
    level: 'متوسط',
    explanation: ['راجع الفرق بين if و else if و else قبل ما تكمل.'],
    quiz: [
      q(
        '>= معناها؟',
        ['أكبر من', 'أكبر من أو يساوي', 'أصغر من', 'يساوي بس'],
        1,
        'العلامة >= يعني أكبر أو يساوي.',
        'صح.',
      ),
      q(
        'في سلسلة if / else if / else كام فرع ممكن يتنفذ؟',
        ['كلهم', 'واحد بس', 'اتنين', 'ولا واحد أبدًا'],
        1,
        'أول شرط يتحقق بيتنفذ والباقي بيتساب.',
        'صح، فرع واحد.',
      ),
    ],
  }),
];
