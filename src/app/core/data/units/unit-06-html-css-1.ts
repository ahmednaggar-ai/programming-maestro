import { Lesson } from '../../models/lesson.model';
import { htmlCssLesson, q, quizLesson } from '../lesson-helpers';

const U = '٨) HTML و CSS (1)';

export const UNIT_06: Lesson[] = [
  htmlCssLesson({
    id: 'html-1',
    unit: U,
    title: 'HTML(1)',
    summary: 'عنوان فقرة بسيطة بـ h1 و p',
    explanation: [
      'HTML بتبني هيكل الصفحة بعناصر زي h1 و p.',
      'كل عنصر ليه تاج فتح وتاج قفل: <h1>...</h1>',
      'النص بيتحط بين التاجين.',
    ],
    challenge: 'اكتب h1 فيه: المايسترو، و p فيه: أتعلم البرمجة',
    starterHtml: `<!-- اكتب HTML هنا -->\n`,
    starterCss: `/* CSS اختياري في الدرس ده */\n`,
    previewChecks: {
      mustIncludeHtml: ['<h1>', 'المايسترو', '<p>', 'أتعلم البرمجة'],
      failHint: 'الـ HTML لسه ناقص عناصر أو نصوص.',
      dialectHint:
        'محتاج <h1>المايسترو</h1> و <p>أتعلم البرمجة</p> بالظبط تقريبًا. اتأكد إن التاجات مقفولة.',
      successMessage: 'صفحة حلوة! HTML تمام.',
    },
    quiz: [
      q(
        'h1 بيستخدم لـ؟',
        ['صورة', 'عنوان رئيسي', 'رابط بس', 'جدول'],
        1,
        'h1 هو أكبر عنوان في الصفحة عادة.',
        'صح.',
      ),
    ],
  }),
  htmlCssLesson({
    id: 'css-1',
    unit: U,
    title: 'CSS(1)',
    summary: 'غيّر لون النص بالـ CSS',
    explanation: [
      'CSS بتزوق الشكل: ألوان، خطوط، مسافات.',
      'h1 { color: gold; } بتخلّي العناوين ذهبية.',
      'اللون بيتكتب بعد كلمة color.',
    ],
    challenge: 'خلّي h1 لونه gold، والـ p لونه navy',
    starterHtml: `<h1>المايسترو</h1>
<p>أتعلم البرمجة</p>`,
    starterCss: `/* زيّن هنا */\n`,
    previewChecks: {
      mustIncludeHtml: ['<h1>', '<p>'],
      mustIncludeCss: ['h1', 'color', 'gold', 'p', 'navy'],
      failHint: 'الـ CSS مش مطبق الألوان المطلوبة.',
      dialectHint:
        'اكتب قاعدتين: h1 { color: gold; } و p { color: navy; }. متتنساش الأقواس والفاصلة المنقوطة.',
      successMessage: 'الستايل تحفة!',
    },
    quiz: [
      q(
        'خاصية اللون في CSS اسمها؟',
        ['paint', 'color', 'font', 'bg'],
        1,
        'بنستخدم color عشان لون النص.',
        'صح.',
      ),
    ],
  }),
  quizLesson({
    id: 'html-css-review-1',
    unit: U,
    title: 'مراجعة الفهم: HTML و CSS',
    summary: 'أسئلة سريعة على الهيكل والتنسيق',
    explanation: ['HTML للهيكل، CSS للشكل.'],
    quiz: [
      q(
        'مين المسؤول عن الشكل؟',
        ['HTML', 'CSS', 'console.log', 'for'],
        1,
        'CSS هي اللي بتزوق.',
        'صح.',
      ),
      q(
        'تاج الفقرة؟',
        ['<h1>', '<p>', '<divv>', '<span1>'],
        1,
        'الفقرة بتكون <p>.',
        'صح.',
      ),
    ],
  }),
];
