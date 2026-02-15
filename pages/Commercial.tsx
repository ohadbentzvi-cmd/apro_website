
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Settings, CheckCircle, Smartphone } from 'lucide-react';

const Commercial: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
            <Header />
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative bg-brand-forest text-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">

                        {/* Text Content */}
                        <div className="flex-1 space-y-6 z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                ניהול נכסים מסחריים: <br />
                                <span className="text-brand-lime">השקט שלכם לצמוח</span>
                            </h1>
                        </div>

                        {/* Image Content */}
                        <div className="flex-1 relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                                <img
                                    src="/commercial hero.png"
                                    alt="בניין משרדים בתל אביב - ניהול נכסים מסחריים"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-forest">
                                ניהול נכסים מסחריים: יותר מקירות ותקרה, זו השקעה בשקט שלכם
                            </h2>
                            <div className="space-y-6">
                                {/* פסקה 1: הגדרת המהות והתפקיד הכפול של הנכס */}
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    אנחנו באפרו מבינים שהנכס המסחרי שלכם ממלא שני תפקידים קריטיים במקביל:
                                    הוא הביטחון הכלכלי והנכס המניב של בעליו, והוא סביבת העבודה והפנים של העסקים השוכרים בו.
                                    המשימה שלנו היא לדאוג ששני הצדדים ייהנו משקט תעשייתי.
                                </p>

                                {/* פסקה 2: הערך המוסף - מעבר לתחזוקה פיזית */}
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    אנחנו מביאים את הסטנדרט המוקפד שלנו למבני משרדים ומסחר בתל אביב והמרכז, תוך הבנה עמוקה של צרכי המשכיר והשוכר.
                                    אנחנו לא רק מתחזקים מבנה – אנחנו מנהלים מערכת יחסים.
                                </p>

                                {/* פסקה 3: הטכנולוגיה והשורה התחתונה ללקוח */}
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    בזכות המעטפת הטכנולוגית שלנו, אנחנו מוודאים שהנכס נשמר במצב אופטימלי, התקלות מטופלות במהירות שיא, והשקיפות הפיננסית מלאה.
                                    כשהתשתית עובדת בצורה מושלמת, השוכרים מרוצים, ערך הנכס נשמר, ואתם יכולים להתמקד בניהול ההשקעות שלכם.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Section */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">

                            <div className="flex-1 space-y-6">
                                <div className="inline-block px-4 py-1.5 bg-brand-lime/20 text-brand-forest font-bold rounded-full text-sm mb-2">
                                    חדשנות בניהול
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    טכנולוגיה שעובדת בשבילכם <br />
                                    <span className="text-gray-400 text-2xl md:text-3xl">(ולא להפך)</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    היתרון של אפרו טמון בחיבור שבין שירות אישי למערכות ניהול חכמות. בזכות אוטומציות מתקדמות, אתם נהנים משקיפות מוחלטת:
                                </p>
                                <ul className="space-y-4 pt-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white p-2 rounded-lg shadow-sm text-brand-lime mt-1">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">כל קריאת שירות מעודכנת בזמן אמת</h4>
                                            <p className="text-sm text-gray-500">אתם תמיד יודעים מה המצב בשטח.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white p-2 rounded-lg shadow-sm text-brand-lime mt-1">
                                            <Settings className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900"> בקרה מלאה על כל מערכות המבנה </h4>
                                            <p className="text-sm text-gray-500">מערכות מיזוג, חשמל, מים, תקשורת ועוד.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white p-2 rounded-lg shadow-sm text-brand-lime mt-1">
                                            <Smartphone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">דיווח פיננסי נגיש וברור</h4>
                                            <p className="text-sm text-gray-500">בלי הפתעות, שקיפות מלאה.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 w-full max-w-md">
                                <div className="rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                    <img
                                        src="/commercial.png"
                                        alt="טכנולוגיה בניהול נכסים"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Commercial;

