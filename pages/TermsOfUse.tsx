import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />
            <main className="flex-1 container mx-auto px-6 py-24 md:py-32 rtl">
                <div className="max-w-3xl mx-auto text-right">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">תנאי שימוש</h1>
                    <div className="prose prose-lg text-gray-600">
                        <h2 className="text-xl font-bold mt-6 mb-2">עדכון אחרון: פברואר 2026</h2>

                        <h3 className="text-lg font-bold mt-6 mb-2">כללי</h3>
                        <p>
                            ברוכים הבאים לאתר Apro. השימוש באתר כפוף לתנאים המפורטים להלן. בעצם הגלישה באתר, הנכם מסכימים לתנאים אלו במלואם.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">השירות</h3>
                        <p>
                            האתר מספק מידע על שירותי ניהול נכסים ואחזקת מבנים של Apro. המידע המוצג באתר נועד להתרשמות וליצירת קשר ראשוני בלבד ואינו מהווה הצעה מחייבת עד לחתימה על הסכם התקשרות נפרד.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">שימוש באתר</h3>
                        <p>
                            השימוש באתר מיועד למטרות חוקיות ופרטיות בלבד. חל איסור מוחלט על ביצוע פעולות המכבידות על תשתית האתר, ניסיונות פריצה או הזנת פרטים כוזבים בטפסים המיועדים ליצירת קשר.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">אחריות</h3>
                        <p>
                            התוכן באתר מוצג כפי שהוא. Apro פועלת לעדכון המידע ודיוקו, אך אינה נושאת באחריות לכל נזק, ישיר או עקיף, העלול להיגרם כתוצאה משימוש באתר או מהסתמכות על המידע המופיע בו.
                        </p>

                        <h3 className="text-lg font-bold mt-6 mb-2">קניין רוחני</h3>
                        <p>
                            כל הזכויות בתכנים המופיעים באתר, לרבות טקסטים, לוגואים ועיצובים, שמורות ל-Apro. אין להעתיק או לעשות שימוש מסחרי במידע ללא אישור מראש ובכתב.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
