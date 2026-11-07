import { Lesson } from '../../models/lesson.model';
import { codingLesson, q } from '../lesson-helpers';

const U = '١) المقدمة';

export const UNIT_01: Lesson[] = [
  codingLesson({
    id: 'intro-hello',
    unit: U,
    title: 'مقدمة: أهلاً بالبرمجة',
    summary: 'إيه هي البرمجة وإزاي تطبع أول رسالة بـ console.log',
    explanation: [
      'البرمجة معناها إنك تقول للكمبيوتر يعمل حاجة بخطوات واضحة.',
      'في JavaScript بنستخدم console.log عشان نطبع حاجة في شاشة النتائج.',
      'النص بيتكتب بين علامتي اقتباس " كذا ".',
    ],
    exampleCode: `console.log("مرحباً يا مايسترو");`,
    challenge: 'اطبع بالظبط: أهلاً بك في عالم البرمجة',
    starterCode: `// اكتب هنا\n`,
    expectedOutput: ['أهلاً بك في عالم البرمجة'],
    mustInclude: ['console.log'],
    failHint: 'لسه النتيجة مش مطابقة للمطلوب.',
    dialectHint:
      'يا معلم، لازم تستخدم console.log وتكتب الجملة بنفس الحروف والمسافات. متزودش ولا تنقص حاجة.',
    successMessage: 'براڤو عليك! دي أول خطوة صح 👏',
    quiz: [
      q(
        'console.log بتعمل إيه؟',
        ['بتفتح موقع', 'بتطبع رسالة في النتائج', 'بتمسح الكود', 'بتغيّر اللون'],
        1,
        'لأ يا صاحبي، console.log وظيفتها تطبع رسالة في شاشة النتائج.',
        'تمام، هي بتطبع الرسالة في النتائج.',
      ),
    ],
  }),
];
