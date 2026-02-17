import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccessibilityStatement: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />
            <main className="flex-1 container mx-auto px-6 py-24 md:py-32 rtl">
                <div className="max-w-3xl mx-auto text-right">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">הצהרת נגישות</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p>
                            אנו ב-Apro רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ופועלים לשם כך לשיפור נגישות האתר.
                        </p>
                        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">רמת הנגישות</h2>
                        <p>
                            אנו משקיעים משאבים רבים על מנת להנגיש את האתר ולאפשר חווית גלישה נוחה לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.
                            האתר מותאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013, ומיישם את המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA.
                        </p>

                        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">יצירת קשר</h2>
                        <p>
                            אם נתקלתם בקושי לגלוש באתר או שיש לכם הערה בנושא, נשמח לקבל פנייה ולטפל בנושא בהקדם:
                            <br />
                            דוא״ל: <a href="mailto:office@apro.co.il" className="text-brand-lime font-medium hover:underline">office@apro.co.il</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AccessibilityStatement;
