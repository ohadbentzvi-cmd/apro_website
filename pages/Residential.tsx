import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { MessageCircle, Shield, FileText, Users, Wrench, Cloud } from 'lucide-react';

interface ResidentialProps {
    onStartAssessment: () => void;
}

const Residential: React.FC<ResidentialProps> = ({ onStartAssessment }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
            <Header onStart={onStartAssessment} />
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative bg-brand-forest text-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">

                        {/* Text Content */}
                        <div className="flex-1 space-y-6 z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                ניהול מגורים <br />
                                <span className="text-brand-lime">בסטנדרט של אפּרו</span>
                            </h1>
                        </div>

                        {/* Image Content */}
                        <div className="flex-1 relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                                <img
                                    src="/residential.jpg"
                                    alt="בניין מגורים בתל אביב"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 md:px-12"> {/* Updated padding for consistency */}
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-forest">
                                ניהול קהילה, לא רק תחזוקה
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    ניהול בניין דורש מקצועיות, לא "טובות" משכנים. אנחנו מחליפים את המרדף אחרי תיקונים וגבייה בניהול חכם, רציני ושקוף.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                    באפּרו אנחנו לא רק מתחזקים מבנה – אנחנו מנהלים קהילה. עם יושרה ללא פשרות ומערכות בקרה מתקדמות, אנחנו שומרים על ערך הנכס ועל יחסי השכנות שלכם.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-6 md:px-12"> {/* Updated padding for consistency */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-lime group">
                                <div className="w-14 h-14 bg-brand-forest/10 rounded-xl flex items-center justify-center mb-6 text-brand-forest group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">דיווח בווטסאפ 24/7</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    תקלה בלובי? פשוט שולחים הודעה. המערכת מעדכנת אתכם בסטטוס הטיפול בזמן אמת. בלי ביורוקרטיה.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-forest group">
                                <div className="w-14 h-14 bg-brand-forest/10 rounded-xl flex items-center justify-center mb-6 text-brand-forest group-hover:scale-110 transition-transform">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">ניהול גבייה וסרבנים</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    אנחנו הגורם המקצועי שמפריד בין השכנות הטובה לניהול הכספי. טיפול מלא בגבייה ובסרבנים ברגישות ובנחישות.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-lime group">
                                <div className="w-14 h-14 bg-brand-forest/10 rounded-xl flex items-center justify-center mb-6 text-brand-forest group-hover:scale-110 transition-transform">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">שקיפות מלאה</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    כל שקל, הצעת מחיר או ביקור טכנאי מתועדים ונגישים לכם. בלי "חורים שחורים", עם שקט נפשי מלא.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-forest group">
                                <div className="w-14 h-14 bg-brand-forest/10 rounded-xl flex items-center justify-center mb-6 text-brand-forest group-hover:scale-110 transition-transform">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">נבחרת המקצוענים</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    רשת קבלנים מורשים ואמינים שעברו סינון קפדני שלנו. אתם מקבלים שירות מאנשי המקצוע הטובים ביותר במחירים הוגנים, תחת הפיקוח והבקרה המלאה שלנו.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-lime group">
                                <div className="w-14 h-14 bg-brand-forest/10 rounded-xl flex items-center justify-center mb-6 text-brand-forest group-hover:scale-110 transition-transform">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">תחזוקה מונעת</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    לא מחכים לתקלות – מונעים אותן. יומן תחזוקה דיגיטלי לכל מערכות הבניין, ממשאבות ועד כיבוי אש. טיפול בזמן שומר על ערך הנכס ומונע הוצאות עתק מפתיעות.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-forest group">
                                <div className="w-14 h-14 bg-brand-forest/10 rounded-xl flex items-center justify-center mb-6 text-brand-forest group-hover:scale-110 transition-transform">
                                    <Cloud className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">הזיכרון הדיגיטלי</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    סוף לקלסרים. כל תוכנית, אישור והיסטוריית תיקונים נשמרים בענן של אפּרו. המידע זמין ונגיש תמיד, גם כשהוועד מתחלף. ניהול חכם ושקוף למאה ה-21.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <CTA onStart={onStartAssessment} />
            </main>
            <Footer />
        </div>
    );
};

export default Residential;
