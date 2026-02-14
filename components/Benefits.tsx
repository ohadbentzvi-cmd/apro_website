import React from 'react';
import { ShieldCheck, Activity, PieChart, User, Zap, Clock } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white p-8 rounded-xl border border-gray-100 hover:border-brand-lime/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-lime/5 relative overflow-hidden">
    {/* Subtle lime glow on hover */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-lime/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
    
    <div className="mb-6 inline-flex p-3 rounded-lg bg-gray-50 text-brand-lime group-hover:bg-brand-lime group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>
    
    <p className="text-gray-600 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "אחריות מקצה לקצה",
      description: "אנחנו לוקחים אחריות מלאה על כל היבטי הבניין. החל מניקיון וגינון ועד מערכות מורכבות, כדי שאתם תוכלו להתמקד בחיים עצמם.",
      icon: <ShieldCheck size={28} strokeWidth={1.5} />
    },
    {
      title: "תחזוקה מונעת",
      description: "אל תחכו לתקלה. המערכות שלנו מנטרות את מצב המבנה ומזהות בעיות פוטנציאליות לפני שהן הופכות להוצאה יקרה.",
      icon: <Activity size={28} strokeWidth={1.5} />
    },
    {
      title: "שקיפות תקציבית מלאה",
      description: "גישה בזמן אמת לכל הנתונים הפיננסיים של הבניין. דוחות ברורים, קבלות דיגיטליות וניהול תקציב חכם.",
      icon: <PieChart size={28} strokeWidth={1.5} />
    },
    {
      title: "נקודת קשר אחת",
      description: "אין יותר 'טלפון שבור' בין ספקים. מנהל תיק אישי המכיר את הבניין שלכם לעומק זמין לכל פנייה ושאלה.",
      icon: <User size={28} strokeWidth={1.5} />
    },
    {
      title: "טכנולוגיה מתקדמת",
      description: "אפליקציה ייעודית לדיירים לדיווח על תקלות, תשלומים ועדכונים שוטפים. הכל בלחיצת כפתור.",
      icon: <Zap size={28} strokeWidth={1.5} />
    },
    {
      title: "זמינות 24/7",
      description: "מוקד חירום המאויש סביב השעון לטיפול בבעיות דחופות כמו פיצוצי צנרת, תקלות מעלית או בעיות חשמל.",
      icon: <Clock size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ניהול חכם, שקט נפשי אמיתי
          </h2>
          <p className="text-lg text-gray-600 font-light">
            הפלטפורמה שלנו מחברת בין שירות אישי ומקצועי לבין טכנולוגיה שקופה ויעילה.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              title={benefit.title} 
              description={benefit.description} 
              icon={benefit.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;