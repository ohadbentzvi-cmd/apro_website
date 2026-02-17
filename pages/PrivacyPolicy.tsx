import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />
            <main className="flex-1 container mx-auto px-6 py-24 md:py-32 rtl">
                <div className="max-w-3xl mx-auto text-right">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">מדיניות פרטיות</h1>
                    <div className="prose prose-lg text-gray-600">
                        <h3 className="text-lg font-bold mt-6 mb-2">איסוף מידע</h3>
                        <p>
                            בעת פנייה דרך האתר, אנו אוספים את הפרטים הבאים: שם מלא, כתובת דואר אלקטרוני, מספר טלפון וכתובת הנכס. מידע זה נחוץ לנו כדי לספק לכם מענה רלוונטי ומקצועי.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">שימוש במידע</h3>
                        <p>
                            המידע משמש לצורך יצירת קשר, מתן הצעות מחיר, תיאום שירותי תחזוקה וניהול שוטף של הקשר העסקי.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">אחסון ואבטחה</h3>
                        <p>
                            המידע מאוחסן במערכות ענן מאובטחות המשמשות את Apro. אנו מיישמים נהלי אבטחה מקובלים כדי להגן על המידע מפני גישה בלתי מורשית.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">צדדים שלישיים</h3>
                        <p>
                            Apro אינה מוכרת או משתפת את פרטיכם עם גורמים חיצוניים למטרות שיווק. המידע יועבר לצדדים שלישיים רק במידה והדבר נדרש לצורך תפעול השירות שביקשתם (למשל, תיאום מול קבלן ביצוע) או במקרה של דרישה משפטית.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">זכויות המשתמש</h3>
                        <p>
                            בכל עת תוכלו לבקש לעיין במידע שנשמר עליכם או לבקש את מחיקתו לצמיתות. למימוש זכות זו, יש לפנות אלינו בדואר אלקטרוני לכתובת: <a href="mailto:office@aproholdings.com" className="text-brand-lime">office@aproholdings.com</a>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
