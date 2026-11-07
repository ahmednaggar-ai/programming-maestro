import { Lesson } from '../../models/lesson.model';
import { codingLesson, htmlCssLesson, q, quizLesson } from '../lesson-helpers';

export const UNIT_09: Lesson[] = [
  codingLesson({
    id: 'fn-3',
    unit: '١٢) دوال ومخطط انسيابي',
    title: 'الدوال (3)',
    summary: 'دالة بترجع قيمة بـ return',
    level: 'متقدم',
    explanation: [
      'return بتخرج قيمة من الدالة.',
      'function add(a,b){ return a+b; }',
      'بعدين نطبع الناتج: console.log(add(2,3))',
    ],
    exampleCode: `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
    challenge: 'اعمل دالة add(a,b) ترجع المجموع واستدعيها بـ (10,5) واطبع الناتج',
    starterCode: `// return\n`,
    expectedOutput: ['15'],
    mustInclude: ['function', 'return', 'add'],
    failHint: 'return أو الاستدعاء مش مظبوط.',
    dialectHint:
      'لازم return جوه الدالة، وبعدين console.log(add(10, 5)); من غير ما تطبع جوه الدالة نفسها.',
    successMessage: 'return بقت في إيدك.',
    quiz: [
      q('return بتعمل إيه؟', ['بتمسح الدالة', 'بتطلع قيمة من الدالة', 'بتفتح صفحة', 'بتوقف اللوب بس'], 1, 'بترجع نتيجة للاستدعاء.', 'صح.'),
    ],
  }),
  codingLesson({
    id: 'flowchart-1',
    unit: '١٢) دوال ومخطط انسيابي',
    title: 'المخطط الانسيابي',
    summary: 'حوّل منطق المخطط لكود if/else',
    level: 'متوسط',
    kind: 'flowchart',
    explanation: [
      'المخطط الانسيابي بيرسم القرار: معين للشرط ومربع للعملية.',
      'مثال مخطط: لو الحرارة > 30 اطبع حار غير كده معتدل.',
      'نفس المنطق بنحوّله لـ if/else في الكود.',
    ],
    exampleCode: `let temp = 35;
if (temp > 30) {
  console.log("حار");
} else {
  console.log("معتدل");
}`,
    challenge: 'خلي temp = 22 وطبق منطق المخطط: >30 حار وإلا معتدل',
    starterCode: `let temp = 22;\n`,
    expectedOutput: ['معتدل'],
    mustInclude: ['if', 'else'],
    failHint: 'منطق المخطط مش مترجم صح.',
    dialectHint: '22 مش أكبر من 30، فه تطبع "معتدل" في else.',
    successMessage: 'قرأت المخطط وحولته لكود صح.',
    quiz: [
      q('شكل الشرط في المخطط غالبًا؟', ['دائرة', 'معين', 'مثلث بس', 'خط'], 1, 'المعين للقرار/الشرط.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'fn-flow-review',
    unit: '١٢) دوال ومخطط انسيابي',
    title: 'مراجعة الفهم',
    summary: 'return والمخطط',
    level: 'متوسط',
    explanation: ['ربط القرار في المخطط بـ if، والقيمة بـ return.'],
    quiz: [
      q('من غير return، add(2,3) لو مفيش console جوه الدالة؟', ['تطبع 5', 'ترجع undefined غالبًا', 'تكراش الصفحة', 'تعمل HTML'], 1, 'مفيش قيمة راجعة.', 'صح.'),
      q('المخطط بيساعد في؟', ['تلوين CSS بس', 'فهم منطق القرار قبل الكود', 'حذف الملفات', 'تثبيت Angular'], 1, 'بيرسم الفكرة قبل التنفيذ.', 'صح.'),
    ],
  }),
  htmlCssLesson({
    id: 'html-2',
    unit: '١٣) HTML و CSS (2)',
    title: 'HTML(2)',
    summary: 'قائمة وروابط',
    level: 'متوسط',
    explanation: [
      'القائمة: <ul> وفيها <li> لكل عنصر.',
      'الرابط: <a href="...">نص</a>',
    ],
    challenge: 'اعمل ul فيها عنصرين: دروس و محرر، ورابط a فيه كلمة ابدأ',
    starterHtml: `<!-- قائمة ورابط -->\n`,
    starterCss: `/* اختياري */\n`,
    previewChecks: {
      mustIncludeHtml: ['<ul>', '<li>', 'دروس', 'محرر', '<a', 'ابدأ'],
      failHint: 'القائمة أو الرابط ناقصين.',
      dialectHint:
        'محتاج <ul> فيها <li>دروس</li> و <li>محرر</li> وكمان <a href="#">ابدأ</a> مثلًا.',
      successMessage: 'HTML متقدم شوية وناجح.',
    },
    quiz: [
      q('عنصر عنصر القائمة؟', ['<ul>', '<li>', '<a>', '<p>'], 1, 'li جوه ul.', 'صح.'),
    ],
  }),
  htmlCssLesson({
    id: 'css-2',
    unit: '١٣) HTML و CSS (2)',
    title: 'CSS(2)',
    summary: 'خلفية وحجم خط',
    level: 'متوسط',
    explanation: [
      'background-color للخلفية.',
      'font-size لحجم الخط.',
    ],
    challenge: 'خلّي body خلفية #0f172a والـ h1 حجمه 28px ولونه gold',
    starterHtml: `<h1>المايسترو</h1>
<p>منصة التعلم</p>`,
    starterCss: `/* ستايل أقوى */\n`,
    previewChecks: {
      mustIncludeHtml: ['<h1>'],
      mustIncludeCss: ['body', 'background', '#0f172a', 'h1', 'font-size', '28px', 'gold'],
      failHint: 'خصائص CSS المطلوبة ناقصة.',
      dialectHint:
        'body { background-color: #0f172a; } و h1 { font-size: 28px; color: gold; }',
      successMessage: 'ستايل فخم زي هوية المايسترو.',
    },
    quiz: [
      q('font-size بتتحكم في؟', ['اللون بس', 'حجم الخط', 'الرابط', 'اللوب'], 1, 'حجم الكتابة.', 'صح.'),
    ],
  }),
  quizLesson({
    id: 'html-css-review-2',
    unit: '١٣) HTML و CSS (2)',
    title: 'مراجعة الفهم',
    summary: 'قوائم وروابط وتنسيق',
    level: 'متوسط',
    explanation: ['ul/li و a و background-color.'],
    quiz: [
      q('تاج الرابط؟', ['<linko>', '<a>', '<url>', '<go>'], 1, 'الرابط <a>.', 'صح.'),
      q('background-color لـ؟', ['حجم الخط', 'لون الخلفية', 'طباعة', 'دالة'], 1, 'خلفية العنصر.', 'صح.'),
    ],
  }),
];
