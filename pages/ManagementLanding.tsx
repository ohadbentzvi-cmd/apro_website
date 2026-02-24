import React, { useState } from 'react';
import { Shield, Settings, Wrench, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';

const ManagementLanding: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [phoneError, setPhoneError] = useState('');

    const validateIsraeliPhone = (phone: string) => {
        let cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.startsWith('972')) {
            cleanPhone = '0' + cleanPhone.substring(3);
        }
        if (!cleanPhone.startsWith('0')) return false;
        if (cleanPhone.length === 10) {
            return ['05', '07'].includes(cleanPhone.substring(0, 2));
        } else if (cleanPhone.length === 9) {
            return ['02', '03', '04', '08', '09'].includes(cleanPhone.substring(0, 2));
        }
        return false;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateIsraeliPhone(formData.phone)) {
            setPhoneError('מספר טלפון לא תקין');
            return;
        }
        setPhoneError('');

        setFormStatus('submitting');

        try {
            const payload = {
                fullName: formData.name,
                phone: formData.phone,
                email: formData.email,
                stage: 'initial_contact',
                lead_type: 'management_landing',
                metadata: {
                    source: 'management_landing_page',
                    timestamp: new Date().toISOString(),
                }
            };

            await fetch('https://internal.aproholdings.com/webhook/a986c204-c502-4664-8f6d-ee0ad66bc147', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setFormStatus('success');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1A1A1A] text-right" dir="rtl">

            <main className="flex-grow pt-24 md:pt-32">
                {/* Hero Section */}
                <section className="relative bg-white text-brand-forest overflow-hidden py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
                        {/* Text Content */}
                        <div className="w-full max-w-4xl space-y-6 mb-12">
                            <div className="inline-flex items-center gap-2 bg-brand-forest/5 px-4 py-2 rounded-full border border-brand-forest/10 text-sm font-medium mb-4">
                                <span>גאים להיות עסק של מילואימניקים</span>
                                <span>🇮🇱</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-700 pb-8">
                                ועד הבית <span className="text-brand-lime relative inline-block pb-3 md:pb-4">
                                    צריך חילוף?
                                    <span className="absolute left-0 right-0 bottom-0 h-1.5 md:h-2 bg-brand-lime rounded-full"></span>
                                </span><br />
                                <span className="mt-4 md:mt-6 block">אפּרו ניהול ואחזקת מבנים</span>
                            </h1>

                            <h2 className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto font-normal mt-6 max-w-3xl">
                                הופכים את ועד הבית משירות מתיש לשקט נפשי. שקיפות מלאה, תחזוקה מקצועית ויחס אישי.
                            </h2>
                        </div>

                        {/* Lead Capture Form */}
                        <div className="w-full max-w-5xl bg-white rounded-[12px] shadow-[0_15px_50px_-10px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 z-20 mx-auto">
                            {formStatus === 'success' ? (
                                <div className="text-center space-y-4 py-4">
                                    <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto text-brand-forest mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-forest">תודה רבה!</h3>
                                    <p className="text-gray-600 px-4 leading-relaxed">קיבלנו את הפרטים. נחזור אליכם בהקדם ונשמח לשמוע על הבניין שלכם.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-normal text-center text-gray-500">
                                        <span className="text-brand-lime font-bold">אנחנו לשירותכם.</span> מלאו את הפרטים ונחזור אליכם בהקדם
                                    </h3>

                                    <div className="flex flex-col md:flex-row items-stretch gap-4 w-full justify-center">
                                        <div className="w-full md:w-1/4">
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full h-full px-6 py-3 bg-white border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-lime/20 focus:border-brand-lime transition-all text-right shadow-sm placeholder:text-gray-400"
                                                placeholder="שם *"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/4 relative">
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                dir="ltr"
                                                value={formData.phone}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, phone: e.target.value });
                                                    if (phoneError) setPhoneError('');
                                                }}
                                                className={`w-full h-full px-6 py-3 bg-white border ${phoneError ? 'border-red-500' : 'border-gray-100'} rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-lime/20 focus:border-brand-lime transition-all text-right shadow-sm placeholder:text-gray-400`}
                                                placeholder="* טלפון"
                                            />
                                            {phoneError && <p className="absolute -bottom-5 right-1 text-red-500 text-xs">{phoneError}</p>}
                                        </div>

                                        <div className="w-full md:w-1/4">
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full h-full px-6 py-3 bg-white border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-lime/20 focus:border-brand-lime transition-all text-right shadow-sm placeholder:text-gray-400"
                                                placeholder="דואר אלקטרוני"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/4 flex">
                                            <button
                                                type="submit"
                                                disabled={formStatus === 'submitting'}
                                                className="w-full h-full min-h-[48px] px-6 py-3 bg-brand-lime text-white text-lg font-bold rounded-xl shadow-md shadow-brand-lime/20 hover:shadow-lg hover:shadow-brand-lime/30 active:scale-[0.98] transition-all flex items-center justify-center overflow-hidden"
                                            >
                                                {formStatus === 'submitting' ? 'שולח...' : 'שליחה'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* Responsibility Areas (Service Matrix) */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                                מה אנחנו עושים בעצם?
                            </h2>
                            <p className="mt-4 text-lg md:text-xl text-gray-600">
                                כל מה שהבניין שלכם צריך כדי לתפקד בצורה חלקה:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Column 1 */}
                            <div className="group relative bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-brand-forest/10 hover:border-brand-lime/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="w-16 h-16 bg-brand-forest/5 rounded-2xl flex items-center justify-center mb-6 text-brand-lime group-hover:scale-110 group-hover:text-brand-lime group-hover:bg-brand-forest/10 transition-all duration-500 shadow-sm border border-brand-forest/10">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-forest transition-colors">
                                        ניהול כספי ושקיפות מלאה
                                    </h3>
                                    <p className="text-brand-forest/80 font-medium text-lg mb-6">אנחנו דואגים לקופה, אתם מקבלים שקט.</p>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                                    <ul className="space-y-4 text-gray-600 leading-relaxed mt-auto">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">גבייה וניהול שוטף:</strong> גביית מיסי ועד בצורה מסודרת, כולל טיפול מקצועי ורגיש בסרבני תשלום.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">הנהלת חשבונות:</strong> דוחות רבעוניים שקופים ומפורטים על כל הפקדה והוצאה בבניין.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">ייעוץ משפטי:</strong> מעטפת משפטית להתנהלות תקינה של הוועד מול הדיירים והרשויות.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="group relative bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-brand-forest/10 hover:border-brand-lime/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="w-16 h-16 bg-brand-forest/5 rounded-2xl flex items-center justify-center mb-6 text-brand-lime group-hover:scale-110 group-hover:text-brand-lime group-hover:bg-brand-forest/10 transition-all duration-500 shadow-sm border border-brand-forest/10">
                                        <Settings className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-forest transition-colors">
                                        אחזקה, ניקיון וטיפוח
                                    </h3>
                                    <p className="text-brand-forest/80 font-medium text-lg mb-6">הסטנדרט שלנו: בניין שנעים להיכנס אליו.</p>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                                    <ul className="space-y-4 text-gray-600 leading-relaxed mt-auto">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">תחזוקה שוטפת:</strong> צוותי ניקיון קבועים, גינון וטיפוח חזית הבניין, הדברה וחשמל.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">כתובת אחת לכל תקלה:</strong>  ניהול וביצוע תיקונים שוטפים, איטום גגות, אינסטלציה ותחזוקה כללית של המרחב המשותף.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">תשתיות מורכבות:</strong> מומחיות בניהול חניונים אוטומטיים, רובוטיים וחדרים רב-תכליתיים.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="group relative bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-brand-forest/10 hover:border-brand-lime/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                                <div className="relative z-10 flex-grow flex flex-col">
                                    <div className="w-16 h-16 bg-brand-forest/5 rounded-2xl flex items-center justify-center mb-6 text-brand-lime group-hover:scale-110 group-hover:text-brand-lime group-hover:bg-brand-forest/10 transition-all duration-500 shadow-sm border border-brand-forest/10">
                                        <Wrench className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-forest transition-colors">
                                        פיקוח ומערכות חיוניות
                                    </h3>
                                    <p className="text-brand-forest/80 font-medium text-lg mb-6">מוכנות מלאה לכל תרחיש, 24/7.</p>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                                    <ul className="space-y-4 text-gray-600 leading-relaxed mt-auto">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">בקרת מערכות:</strong> מעקב וביקורת קפדנית על מעליות, גנרטורים, מערכות מים וגילוי אש.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">מענה לחירום:</strong> מוקד זמין לקריאות דחופות מסביב לשעון (24/7).</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 min-w-[24px] min-h-[24px] text-brand-lime flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-gray-900 font-semibold">אנרגיה ואבטחה:</strong> תחזוקת מערכות סולאריות, מצלמות אבטחה ומערכות בקרת כניסה.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Simple Trust Signal Footer */}
            <footer className="bg-white text-brand-forest py-12 border-t border-gray-200 mt-auto">
                <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-base md:text-lg font-light tracking-wide text-gray-600">
                        <a href="/" className="hover:text-brand-lime transition-colors">דף הבית</a>
                        <span className="hidden md:inline text-gray-300">•</span>
                        <a href="/accessibility" className="hover:text-brand-lime transition-colors">הצהרת נגישות</a>
                        <span className="hidden md:inline text-gray-300">•</span>
                        <a href="tel:055-5535891" className="hover:text-brand-lime transition-colors font-medium" dir="ltr">055-5535891 :טלפון</a>
                    </div>
                    <div className="flex justify-center w-full max-w-2xl">
                        <img src="/logo.svg" alt="Apro Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ManagementLanding;
