import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-48 bg-[#F9FAFB] overflow-hidden" lang="he">
      {/* Background Decoration: APRO Polygon logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          viewBox="0 0 100 100"
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] text-brand-lime opacity-[0.05]"
        >
          <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1200px]">
        {/* Accent Line */}
        <div className="flex justify-center mb-4">
          <div className="w-[60px] h-[3px] bg-brand-lime rounded-full"></div>
        </div>

        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1E293B] mb-8 leading-tight font-sans">
            החזון שלנו: שקט נפשי דרך שקיפות מלאה
          </h2>

          <div className="text-[16px] md:text-[18px] text-[#334155] leading-[1.7] space-y-6 font-normal font-sans text-center" dir="rtl">
            <p>
              הקמנו את APRO מתוך הבנה שניהול בניינים לא חייב להיות מיושן, איטי או מעורפל. זיהינו פער עצום בין הקדמה הטכנולוגית של היום לבין הדרך המיושנת שבה מנוהלים נכסים - והחלטנו לגשר עליו.
            </p>
            <p>
              אנחנו מביאים לעולם הנדל"ן את התרבות הניהולית של עולם ההייטק: עבודה עם מערכות מתקדמות, אוטומציות חכמות ותהליכים מדידים. עבורנו, טכנולוגיה היא לא מטרה, אלא הכלי שמאפשר לנו להעניק לכם שקט נפשי אמיתי.
            </p>
            <p>
              החל מתחזוקה מונעת שמתוכננת מראש וחוסכת תקלות יקרות, ועד שקיפות תקציבית מלאה שזמינה לכם בכל רגע. אנחנו מביאים את הדיוק והיעילות של עולם המערכות היישר אל הבניין שלכם, כדי שתוכלו פשוט להרגיש בבית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;