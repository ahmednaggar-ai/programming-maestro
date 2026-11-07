import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

export const UNIT_10: Lesson[] = [
  codingLesson({
    id: 'switch-1',
    unit: '١٤) switch والمتبقي',
    title: 'جمل switch',
    summary: 'اختيارات متعددة بـ switch/case',
    level: 'متوسط',
    explanation: [
      'switch بتقارن قيمة بأكتر من حالة case.',
      'متتنساش break بعد كل case.',
      'default لو ولا case اتنفذت.',
    ],
    exampleCode: `let day = 1;
switch (day) {
  case 1:
    console.log("سبت");
    break;
  default:
    console.log("يوم تاني");
}`,
    challenge: 'خلي day = 2: case 1 سبت، case 2 أحد، default يوم تاني',
    starterCode: `let day = 2;\n`,
    expectedOutput: ['أحد'],
    mustInclude: ['switch', 'case', 'break'],
    failHint: 'switch مش طابع أحد.',
    dialectHint:
      'case 2: console.log("أحد"); break; — لو نسيت break ممكن يكمّل على اللي بعده.',
    successMessage: 'switch تمام يا معلم.',
    quiz: [
      q('break ليه مهمة؟', ['شكل بس', 'توقف تنفيذ باقي cases', 'تعمل لوب', 'تمسح المتغير'], 1, 'من غيرها التنفيذ يسقط للحالات اللي بعدها.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'modulo-1',
    unit: '١٤) switch والمتبقي',
    title: 'المتبقي (Modulo)',
    summary: 'استخدم % لمعرفة الباقي',
    level: 'متوسط',
    explanation: [
      'العامل % بيرجع الباقي بعد القسمة.',
      '10 % 3 = 1',
      'مفيد للزوجي/الفردي والتوقيت والتكرار الدوري.',
    ],
    exampleCode: `console.log(10 % 3);`,
    challenge: 'اطبع ناتج 17 % 5',
    starterCode: `// modulo\n`,
    expectedOutput: ['2'],
    mustInclude: ['%'],
    failHint: 'الباقي مش 2.',
    dialectHint: '17 على 5 = 3 والباقي 2 → console.log(17 % 5);',
    successMessage: 'الباقي مفهوم خلاص.',
    quiz: [
      q('9 % 3 =', ['3', '0', '9', '1'], 1, 'بيتقتال من غير باقي.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'switch-mod-review',
    unit: '١٤) switch والمتبقي',
    title: 'مراجعة الفهم',
    summary: 'switch و %',
    level: 'متوسط',
    explanation: ['break و معنى الباقي.'],
    quiz: [
      q('default في switch؟', ['أول case', 'لو مفيش case مناسب', 'خطأ دايمًا', 'بديل for'], 1, 'حالة افتراضية.', 'صح.'),
      q('14 % 4 =', ['2', '3', '4', '0'], 0, '14=3*4+2.', 'صح الباقي 2.'),
    ],
  }),
  codingLesson({
    id: 'const-neq',
    unit: '١٥) const و while',
    title: 'const / عدم المساواة',
    summary: 'ثوابت const والمقارنة !==',
    level: 'متوسط',
    explanation: [
      'const قيمة ثابتة مش بتتغير بعد التعريف.',
      '!== معناها مش يساوي (قيمة أو نوع).',
      'مفيدة لما نتأكد إن حاجة مختلفة.',
    ],
    exampleCode: `const PI = 3;
let x = 5;
if (x !== PI) {
  console.log("مختلف");
}`,
    challenge: 'عرّف const school = "المايسترو" ومتغير name = "طالب" ولو !== اطبع: مختلف',
    starterCode: `const school = "المايسترو";\nlet name = "طالب";\n`,
    expectedOutput: ['مختلف'],
    mustInclude: ['const', '!=='],
    failHint: 'المقارنة أو الطباعة مش صح.',
    dialectHint: 'if (name !== school) { console.log("مختلف"); }',
    successMessage: 'const و !== في الجيب.',
    quiz: [
      q('تقدر تغيّر قيمة const بعدين؟', ['أيوه عادي', 'لأ', 'بس في اللوب', 'بس في HTML'], 1, 'الثابت بيتثبت.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'while-1',
    unit: '١٥) const و while',
    title: 'جمل while',
    summary: 'كرّر طالما الشرط متحقق',
    level: 'متوسط',
    explanation: [
      'while (شرط) { ... } بتفضل تلف وأحسن الشرط صح.',
      'مهم جدًا تغيّر متغير الشرط جوه اللوب عشان متعملش لوب لا نهائي.',
    ],
    exampleCode: `let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}`,
    challenge: 'استخدم while واطبع 1 ثم 2 ثم 3',
    starterCode: `let i = 1;\n`,
    expectedOutput: ['1', '2', '3'],
    mustInclude: ['while'],
    failHint: 'while مش طابعة 1..3.',
    dialectHint:
      'while (i <= 3) { console.log(i); i++; } — لو نسيت i++ هتلف للأبد.',
    successMessage: 'while تحت السيطرة.',
    quiz: [
      q('لو نسيت تزود العداد في while؟', ['هتوقف لوحدها', 'ممكن تلف بلا نهاية', 'هتحول لـ for', 'هتعمل CSS'], 1, 'الشرط يفضل صحيح.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'final-review',
    unit: '١٥) const و while',
    title: 'مراجعة الفهم',
    summary: 'مراجعة ختامية const و !== و while',
    level: 'متوسط',
    explanation: ['آخر محطة مراجعة في المنهج الحالي.'],
    quiz: [
      q('!== تعني؟', ['يساوي', 'لا يساوي', 'أكبر', 'أقل'], 1, 'عدم المساواة.', 'صح.'),
      q('while بتلف امتى؟', ['مرة واحدة بس', 'طالما الشرط true', 'بعد return بس', 'مع CSS'], 1, 'طول ما الشرط متحقق.', 'صح.'),
      q('const مناسب لـ؟', ['قيمة بتتغير كل ثانية', 'قيمة ثابتة', 'اسم اللوب بس', 'تاج HTML'], 1, 'الثوابت.', 'صح.'),
    ],
  }),
];
