import React, { useState } from 'react';
import { MapPin, Quote, ChevronRight, ChevronLeft } from 'lucide-react';

interface Testimonial {
    id: string;
    locationLabel: string;
    quote: string;
    name: string;
}

const testimonials: Testimonial[] = [
    {
        id: 'tel-aviv',
        locationLabel: 'תל אביב',
        quote: '"חברת אפרו עשו אצלנו מהפכה בבניין, מחוסר שיתוף פעולה מצד כל הדיירים ועד חובות ובניין שלא נוקה מעל חודשיים, אפרו הגיעו ועשו סדר בבלאגן, היום כל הדיירים משתפים פעולה והבניין מתנהל כראוי."',
        name: 'רועי, ועד הבית',
    },
    {
        id: 'raanana',
        locationLabel: 'רעננה',
        quote: '"אחרי תקופה שלאף דייר לא היה כוח להתעסק עם ניהול הבניין, אפרו הגיעו והביאו איתם סדר ושקט לכל הדיירים בבניין. שווה כל שקל!"',
        name: 'דניאל, נציג דיירים',
    },
    {
        id: 'petah-tikva-1',
        locationLabel: 'פתח תקווה',
        quote: '"שחר ואוהד חברה רציניים שניתן לסמוך על מילה שלהם. כל ההתנהלות איתם בצורה שקופה. ממליץ מאוד."',
        name: 'ועד הבית',
    },
    {
        id: 'petah-tikva-2',
        locationLabel: 'פתח תקווה',
        quote: '"ממליץ ממליץ ממליץ. היינו מאוד סקפטיים בנוגע לחברת ניהול בבניין אבל שחר ואוהד הביאו משהו שונה, ביחס, בשקיפות ובשירות המדהים."',
        name: 'מיכל, נציגת דיירים',
    }
];

const InteractiveTestimonial: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeTestimonial = testimonials[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-[#FAFAFA] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                        הבניינים של אפּרו: סטנדרט חדש
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        הצטרפו לקהילת ועדי הבתים שכבר נהנים מניהול חכם, שקיפות מלאה ושקט נפשי.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto flex items-center justify-between gap-8">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="p-4 rounded-full bg-white shadow-lg text-gray-800 hover:bg-brand-lime hover:text-white transition-all duration-300 hidden md:block focus:outline-none z-20"
                        aria-label="Previous testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="w-full max-w-3xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 relative overflow-hidden min-h-[300px] flex flex-col justify-center text-center items-center">
                            {/* Decorative Quote Icon */}
                            <div className="absolute top-6 left-6 text-brand-lime/10">
                                <Quote className="w-24 h-24 transform rotate-180" />
                            </div>

                            {/* Dynamic Content */}
                            <div key={activeTestimonial.id} className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-6 text-brand-forest font-semibold tracking-wide uppercase text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>{activeTestimonial.locationLabel}</span>
                                </div>

                                <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-normal mb-8 max-w-2xl min-h-[4.5em] flex flex-col justify-center">
                                    {activeTestimonial.quote}
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-lime font-bold text-lg">
                                        {activeTestimonial.name.charAt(0)}
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-gray-900">{activeTestimonial.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation Controls */}
                        <div className="flex justify-center gap-4 mt-6 md:hidden">
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-white shadow-md text-gray-800 hover:bg-brand-lime hover:text-white transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-white shadow-md text-gray-800 hover:bg-brand-lime hover:text-white transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="p-4 rounded-full bg-white shadow-lg text-gray-800 hover:bg-brand-lime hover:text-white transition-all duration-300 hidden md:block focus:outline-none z-20"
                        aria-label="Next testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTestimonial;
