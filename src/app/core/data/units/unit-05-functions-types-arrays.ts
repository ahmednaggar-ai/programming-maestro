import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

export const UNIT_05: Lesson[] = [
  codingLesson({
    id: 'fn-1',
    unit: '٥) الدوال',
    title: 'الدالة (1)',
    summary: 'عرّف دالة واستدعيها',
    level: 'متوسط',
    explanation: [
      'الدالة قطعة كود ليها اسم، بنستدعيها وقت ما نحتاج.',
      'function greet() { console.log("أهلاً"); }',
      'الاستدعاء: greet()',
    ],
    exampleCode: `function greet() {
  console.log("أهلاً");
}
greet();`,
    challenge: 'اعمل دالة اسمها hello تطبع: مرحباً ثم استدعيها',
    starterCode: `// الدالة هنا\n`,
    expectedOutput: ['مرحباً'],
    mustInclude: ['function', 'hello'],
    failHint: 'الدالة مش متعرّفة أو مش مستدعية.',
    dialectHint:
      'اكتب function hello() { console.log("مرحباً"); } وبعدين في سطر لوحده: hello();',
    successMessage: 'دالتك اشتغلت يا بطل!',
    quiz: [
      q(
        'استدعاء الدالة hello بيتم بإيه؟',
        ['hello', 'hello()', 'function hello', 'call hello'],
        1,
        'الاستدعاء لازم أقواس: hello()',
        'صح.',
      ),
    ],
  }),
  quizLesson({
    id: 'fn-review-1',
    unit: '٥) الدوال',
    title: 'مراجعة الفهم: الدوال',
    summary: 'تأكد إنك فاهم تعريف واستدعاء الدالة',
    level: 'متوسط',
    explanation: ['الدالة = تعريف + استدعاء.'],
    quiz: [
      q(
        'ليه بنستخدم الدوال؟',
        ['عشان نزوق الصفحة', 'عشان نعيد استخدام الكود', 'عشان نمسح المتغيرات', 'مفيش فايدة'],
        1,
        'الدالة بتخلينا نكتب الكود مرة ونستخدمه أكتر من مرة.',
        'صح.',
      ),
      q(
        'من غير استدعاء الدالة، الكود اللي جواها؟',
        ['بيتنفذ لوحده', 'مش بيتنفذ', 'بيحصل خطأ دايمًا', 'بيتمسح'],
        1,
        'لحد ما تنادي اسمها بأقواس، مش هتتنفذ.',
        'صح.',
      ),
    ],
  }),
  codingLesson({
    id: 'types-1',
    unit: '٦) الأنواع',
    title: 'الأنواع',
    summary: 'افهم number و string و boolean مع typeof',
    level: 'متوسط',
    explanation: [
      'الأنواع الشائعة: number و string و boolean.',
      'typeof بتقولك نوع القيمة.',
      'مثال: typeof 5 → "number"',
    ],
    exampleCode: `console.log(typeof 5);
console.log(typeof "hi");
console.log(typeof true);`,
    challenge: 'اطبع نوع الرقم 10 ثم نوع النص "مرحباً" (سطرين)',
    starterCode: `// استخدم typeof\n`,
    expectedOutput: ['number', 'string'],
    mustInclude: ['typeof'],
    failHint: 'typeof أو الترتيب مش صح.',
    dialectHint:
      'اول سطر: console.log(typeof 10); وتاني سطر: console.log(typeof "مرحباً");',
    successMessage: 'كويس، عرفت تفرّق الأنواع.',
    quiz: [
      q(
        'typeof true بيطلع؟',
        ['true', 'boolean', 'string', 'number'],
        1,
        'true و false نوعهم boolean.',
        'صح.',
      ),
    ],
  }),
  codingLesson({
    id: 'arrays-1',
    unit: '٧) المصفوفات',
    title: 'المصفوفة (1)',
    summary: 'اعمل مصفوفة واطبع عنصر',
    level: 'متوسط',
    explanation: [
      'المصفوفة قائمة قيم: let nums = [10, 20, 30];',
      'العنصر الأول index بتاعه 0.',
      'nums[0] → 10',
    ],
    exampleCode: `let colors = ["أحمر", "أخضر"];
console.log(colors[0]);`,
    challenge: 'اعمل مصفوفة fruits فيها "تفاح" و"موز" واطبع أول عنصر',
    starterCode: `// المصفوفة\n`,
    expectedOutput: ['تفاح'],
    mustInclude: ['[', ']'],
    failHint: 'المصفوفة أو الـ index مش صح.',
    dialectHint:
      'خلّي بالك: أول عنصر index = 0 مش 1. مثال: let fruits = ["تفاح", "موز"]; console.log(fruits[0]);',
    successMessage: 'المصفوفة تمام!',
    quiz: [
      q(
        'أول عنصر في المصفوفة index بتاعه؟',
        ['1', '0', '2', '-1'],
        1,
        'في البرمجة العدّ غالبًا بيبدأ من صفر.',
        'صح، من صفر.',
      ),
    ],
  }),
];
