import React, { useState } from 'react';
import { MapPin, Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    locationLabel: string;
    quote: string;
    name: string;
    top: string; // Percentage for map positioning
    left: string; // Percentage for map positioning
}

const testimonials: Testimonial[] = [
    {
        id: 'tel-aviv',
        locationLabel: 'תל אביב',
        quote: '"המעבר לאפּרו שינה את חוקי המשחק בבניין. השקיפות הדיגיטלית והסדר בניהול נותנים לנו ביטחון מלא שהנכס בידיים טובות."',
        name: 'רועי, ועד הבית',
        top: '45%',
        left: '30%'
    },
    {
        id: 'raanana',
        locationLabel: 'רעננה',
        quote: '"חיפשנו שותף לניהול הבניין, לא עוד קבלן אחזקה. המערכות של אפּרו הופכות כל תקלה לטיפול מהיר ושקוף לכל הדיירים."',
        name: 'דניאל, נציג דיירים',
        top: '18%',
        left: '52%'
    },
    {
        id: 'petah-tikva-1',
        locationLabel: 'פתח תקווה',
        quote: '"ניהול מקצועי ללא פשרות. היכולת לראות הכל בזמן אמת ולדעת שהתחזוקה מתבצעת ברמה הגבוהה ביותר היא שקט נפשי אמיתי."',
        name: 'ועד הבית',
        top: '45%',
        left: '65%'
    },
    {
        id: 'petah-tikva-2',
        locationLabel: 'פתח תקווה',
        quote: '"סטנדרט הניהול של אפּרו הוא בדיוק מה שהיה חסר בבניינים במרכז. יעילות טכנולוגית פוגשת יחס אישי ומקצועי."',
        name: 'מיכל, נציגת דיירים',
        top: '45%',
        left: '60%'
    }
];

const InteractiveTestimonial: React.FC = () => {
    const [activeId, setActiveId] = useState<string>(testimonials[0].id);

    const activeTestimonial = testimonials.find(t => t.id === activeId) || testimonials[0];

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

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    {/* Map Area (Desktop: Left, Mobile: Top) */}
                    <div className="w-full lg:w-1/2 relative aspect-square max-w-[500px] lg:max-w-none">
                        {/* Minimalist Map Background */}
                        <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 overflow-hidden relative">

                            {/* Map Image */}
                            <img
                                src="/map-bg.png"
                                alt="Map of Central Israel"
                                className="w-full h-full object-cover opacity-20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Interactive Markers */}
                        {testimonials.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setActiveId(t.id)}
                                className={`absolute group transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none`}
                                style={{ top: t.top, left: t.left }}
                                aria-label={`View testimonial from ${t.locationLabel}`}
                            >
                                {/* Pulsing Effect */}
                                <span className={`absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75 animate-ping ${activeId === t.id ? 'duration-1000' : 'duration-[2000ms]'}`}></span>

                                {/* Dot */}
                                <span className={`relative inline-flex rounded-full transition-all duration-300 
                  ${activeId === t.id
                                        ? 'h-6 w-6 bg-brand-lime border-4 border-white shadow-lg scale-125'
                                        : 'h-4 w-4 bg-brand-lime/60 hover:bg-brand-lime hover:scale-110 border-2 border-white shadow-sm'
                                    }`}
                                ></span>

                                {/* Tooltip on Hover */}
                                <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-white rounded-lg shadow-lg text-sm font-semibold text-gray-800 transition-all duration-300 opacity-0 transform translate-y-2 pointer-events-none
                  ${activeId === t.id ? 'opacity-100 translate-y-0' : 'group-hover:opacity-100 group-hover:translate-y-0'}
                `}>
                                    {t.locationLabel}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Testimonial Content (Desktop: Right, Mobile: Bottom) */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 relative overflow-hidden min-h-[420px] flex flex-col justify-center">
                            {/* Decorative Quote Icon */}
                            <div className="absolute top-6 left-6 text-brand-lime/10">
                                <Quote className="w-24 h-24 transform rotate-180" />
                            </div>

                            {/* Dynamic Content */}
                            <div key={activeTestimonial.id} className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-2 mb-6 text-brand-lime font-semibold tracking-wide uppercase text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>{activeTestimonial.locationLabel}</span>
                                </div>

                                <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-normal mb-8">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTestimonial;
