import { Lesson } from '../../models/lesson.model';
import { codingLesson, q, quizLesson } from '../lesson-helpers';

const U = '٢) الحسابات والنصوص والمتغيرات';

export const UNIT_02: Lesson[] = [
  codingLesson({
    id: 'basics-vars',
    unit: U,
    title: 'المتغيرات',
    summary: 'احفظ قيمة في متغير واطبعها',
    explanation: [
      'المتغير زي صندوق بتحط فيه قيمة: رقم أو نص.',
      'بنكتب: let age = 15;',
      'وبعدين نطبع المتغير: console.log(age) من غير علامات اقتباس.',
    ],
    exampleCode: `let city = "القاهرة";
console.log(city);`,
    challenge: 'اعمل متغير اسمه age قيمته 15 واطبعه.',
    starterCode: `// المتغير هنا\n`,
    expectedOutput: ['15'],
    mustInclude: ['let', 'age'],
    failHint: 'المتغير أو الطباعة لسه مش مظبوطة.',
    dialectHint:
      'اعمل let age = 15 وبعدين console.log(age). متكتبش "15" بين اقتباس لو عايز الرقم يطلع كرقم من المتغير.',
    successMessage: 'حلو أوي! المتغيرات بقت سهلة.',
    quiz: [
      q(
        'إيه اللي بنستخدمه عشان نعمل متغير جديد؟',
        ['print', 'let', 'html', 'css'],
        1,
        'غلط — الكلمة الصح هي let.',
        'صح، let بتعمل متغير.',
      ),
    ],
  }),
  codingLesson({
    id: 'basics-math',
    unit: U,
    title: 'الحسابات',
    summary: 'اجمع رقمين واطبع الناتج',
    explanation: [
      'JavaScript بتحسب + - * / بسهولة.',
      'console.log(10 + 5) هتطبع 15.',
      'تقدر كمان تحفظ الناتج في متغير.',
    ],
    exampleCode: `let sum = 10 + 5;
console.log(sum);`,
    challenge: 'اطبع ناتج 12 + 8 (المفروض 20).',
    starterCode: `// احسب هنا\n`,
    expectedOutput: ['20'],
    failHint: 'الناتج مش 20 لسه.',
    dialectHint:
      'اكتب console.log(12 + 8) أو احسبها في متغير واطبعه. المطلوب يظهر 20 بس.',
    successMessage: 'تمام التمام! الحسابات ماشية.',
    quiz: [
      q(
        'ناتج 7 + 3 في الكود بيطلع؟',
        ['73', '10', '"7+3"', 'خطأ'],
        1,
        'لأ، لما الرقمين من غير اقتباس، الجمع بيطلع 10.',
        'صح، الناتج 10.',
      ),
    ],
  }),
  codingLesson({
    id: 'basics-strings',
    unit: U,
    title: 'النصوص ودمجها',
    summary: 'ادمج نصّين بعلامة +',
    explanation: [
      'النص (String) أي كلام بين اقتباس.',
      'تقدر تلزق نصين بـ +: "أنا " + "أتعلم"',
      'المسافات مهمة جوه النص.',
    ],
    exampleCode: `let msg = "مرحباً " + "أحمد";
console.log(msg);`,
    challenge: 'اطبع: أنا أتعلم JavaScript باستخدام دمج +',
    starterCode: `// ادمج هنا\n`,
    expectedOutput: ['أنا أتعلم JavaScript'],
    mustInclude: ['+'],
    failHint: 'النص النهائي مش مطابق أو مفيش دمج.',
    dialectHint:
      'لازم تستخدم + بين جزئين على الأقل، والنتيجة النهائية تبقى: أنا أتعلم JavaScript بالظبط.',
    successMessage: 'عاش! دمج النصوص تمام.',
    quiz: [
      q(
        '"أهلاً " + "يا صاحبي" الناتج؟',
        ['أهلاًيا صاحبي', 'أهلاً يا صاحبي', 'خطأ', 'أهلاً + يا صاحبي'],
        1,
        'في مسافة بعد أهلاً جوه أول نص، فهتطلع: أهلاً يا صاحبي.',
        'صح، المسافة موجودة في أول نص.',
      ),
    ],
  }),
  quizLesson({
    id: 'basics-review',
    unit: U,
    title: 'مراجعة الفهم: أساسيات',
    summary: 'أسئلة سريعة على المتغيرات والحساب والنصوص',
    explanation: [
      'راجع بسرعة: let للمتغير، + للحساب أو دمج النصوص، console.log للطباعة.',
    ],
    quiz: [
      q(
        'إزاي نطبع قيمة متغير اسمه name؟',
        ['console.log("name")', 'console.log(name)', 'print name', 'log.name'],
        1,
        'لو حطيت "name" بين اقتباس هيطبع الكلمة نفسها مش قيمة المتغير.',
        'صح، من غير اقتباس عشان يطبع القيمة.',
      ),
      q(
        'let x = "5" + 2 — الناتج؟',
        ['7', '52', '3', 'خطأ'],
        1,
        'النص "5" لما يتجمع مع رقم بيتحول الموضوع لدمج نصوص → 52.',
        'صح، دمج نص مع رقم = نص "52".',
      ),
      q(
        'أنسب وصف للمتغير؟',
        ['صورة', 'صندوق بيحفظ قيمة', 'زرار', 'لون'],
        1,
        'المتغير مكان بنخزن فيه قيمة عشان نستخدمها تاني.',
        'تمام، زي صندوق للقيم.',
      ),
    ],
  }),
];
