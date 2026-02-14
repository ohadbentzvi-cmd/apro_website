import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, MapPin, CheckCircle, ChevronRight, Loader2, Home, Plus, Minus, Zap } from 'lucide-react';


type Step = 'ADDRESS' | 'CONTACT' | 'TECHNICAL_AUDIT' | 'SUCCESS';


interface OnboardingWizardProps {
 onBack: () => void;
}


const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onBack }) => {
 const [step, setStep] = useState<Step>('ADDRESS');
 const [loading, setLoading] = useState(false);
 const [isValidAddress, setIsValidAddress] = useState(false);
 const [formData, setFormData] = useState<any>({
   address: '',
   fullName: '',
   phone: '',
   email: '',
   // Technical Data
   cleanerFrequency: 'פעמיים בשבוע',
   gardenerFrequency: 'פעם בשבועיים',
   floors: 4,
   apartments: 12,
   hasElevator: true,
   hasRoboticParking: false
 });


 const addressInputRef = useRef<HTMLInputElement>(null);
 const autocompleteRef = useRef<any>(null);


 useEffect(() => {
   if (step === 'ADDRESS' && addressInputRef.current && (window as any).google) {
     autocompleteRef.current = new (window as any).google.maps.places.Autocomplete(addressInputRef.current, {
       componentRestrictions: { country: 'il' },
       fields: ['formatted_address', 'geometry', 'name'],
       types: ['address'],
     });


     autocompleteRef.current.addListener('place_changed', () => {
       const place = autocompleteRef.current?.getPlace();
       if (place && place.formatted_address) {
         setFormData(prev => ({ ...prev, address: place.formatted_address! }));
         setIsValidAddress(true);
       } else {
         setIsValidAddress(false);
       }
     });
   }
 }, [step]);


 const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const val = e.target.value;
   setFormData(prev => ({ ...prev, address: val }));
   setIsValidAddress(false);
 };


 const handleNextToContact = () => {
   if (isValidAddress || formData.address.length > 10) {
     setStep('CONTACT');
   }
 };


 const handleInitialSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   setLoading(true);
   // Stage 1 Capture
   setTimeout(() => {
     console.log('Basic Lead Captured (Stage 1):', {
       address: formData.address,
       fullName: formData.fullName,
       phone: formData.phone,
       email: formData.email
     });
     setLoading(false);
     setStep('TECHNICAL_AUDIT');
   }, 1000);
 };


 const handleFinalSubmit = () => {
   setLoading(true);
   const finalPayload = {
     ...formData,
     lead_type: 'technical',
     metadata: {
       source: 'property_assessment_portal',
       timestamp: new Date().toISOString(),
     }
   };


   setTimeout(() => {
     console.log('Full Technical Lead Captured (Stage 2):', finalPayload);
     setLoading(false);
     setStep('SUCCESS');
   }, 1500);
 };


 const updateNumber = (field: 'floors' | 'apartments', delta: number) => {
   const currentVal = parseInt(formData[field] || 0, 10);
   setFormData(prev => ({
     ...prev,
     [field]: Math.min(99, Math.max(1, currentVal + delta))
   }));
 };


 const handleNumberInputChange = (field: 'floors' | 'apartments', val: string) => {
   // 1. Only allow digits
   const cleanVal = val.replace(/\D/g, '');
  
   // 2. Allow empty state so they can delete and re-type
   if (cleanVal === '') {
     setFormData(prev => ({ ...prev, [field]: '' }));
     return;
   }


   // 3. Only clamp the MAX during typing to prevent layout breaking
   let num = parseInt(cleanVal, 10);
   if (num > 99) num = 99;


   setFormData(prev => ({ ...prev, [field]: num }));
 };


 const handleBlur = (field: 'floors' | 'apartments') => {
   const val = formData[field];
   // Enforce Min 1 fix on exit
   if (val === '' || parseInt(val, 10) < 1) {
     setFormData(prev => ({ ...prev, [field]: 1 }));
   }
 };


 const progress = step === 'ADDRESS' ? 25 : step === 'CONTACT' ? 50 : step === 'TECHNICAL_AUDIT' ? 75 : 100;


 // Reusable sub-components
 const Chip = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
   <button
     type="button"
     onClick={onClick}
     className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border whitespace-nowrap ${
       active
       ? 'bg-brand-lime border-brand-lime text-white shadow-md shadow-brand-lime/20'
       : 'bg-white border-gray-200 text-gray-500 hover:border-brand-lime/30'
     }`}
   >
     {label}
   </button>
 );


 const Stepper = ({ label, value, onAdd, onSub, onChange, onBlur }: { label: string, value: any, onAdd: () => void, onSub: () => void, onChange: (val: string) => void, onBlur: () => void }) => (
   <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100 transition-all focus-within:border-brand-lime/50 focus-within:bg-white focus-within:shadow-sm">
     <span className="text-gray-700 font-bold">{label}</span>
     <div className="flex items-center gap-4">
       <button type="button" onClick={onSub} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-brand-lime hover:border-brand-lime transition-all"><Minus size={16} /></button>
       <input
         type="text"
         inputMode="numeric"
         pattern="[0-9]*"
         value={value}
         onChange={(e) => onChange(e.target.value)}
         onBlur={onBlur}
         className="w-12 text-center font-extrabold text-lg text-gray-900 bg-transparent border-b-2 border-transparent focus:border-brand-lime focus:outline-none transition-all pb-0.5"
         placeholder="1"
       />
       <button type="button" onClick={onAdd} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-brand-lime hover:border-brand-lime transition-all"><Plus size={16} /></button>
     </div>
   </div>
 );


 const Toggle = ({ label, active, onChange }: { label: string, active: boolean, onChange: (val: boolean) => void }) => (
   <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
     <span className="text-gray-700 font-bold">{label}</span>
     <button
       type="button"
       onClick={() => onChange(!active)}
       className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${active ? 'bg-brand-lime' : 'bg-gray-200'}`}
     >
       <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
     </button>
   </div>
 );


 return (
   <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans selection:bg-brand-lime selection:text-white animate-in fade-in duration-500 relative">
     <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>


     <nav className="relative z-10 p-6 md:px-12 flex justify-between items-center bg-white/50 backdrop-blur-sm border-b border-gray-100 shadow-sm">
       <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-brand-forest transition-all font-semibold text-sm group">
         <Home className="w-4 h-4" />
         <span>חזרה למסך הבית</span>
       </button>
       <button onClick={onBack} className="flex items-center gap-2 group transition-all hover:opacity-80">
         <div className="w-8 h-8 relative shadow-sm">
           <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" fill="#A4D65E" />
           </svg>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
               <path d="M12 3 L4 10 V21 H9 V14 H15 V21 H20 V10 L12 3 Z" />
             </svg>
           </div>
         </div>
         <span className="text-xl font-extrabold tracking-tight text-[#1A202C]">APRO</span>
       </button>
     </nav>


     <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
       <div className="w-full max-w-lg bg-white rounded-[12px] shadow-[0_15px_50px_-10px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden transition-all duration-700">
         <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-50/50">
           <div className="h-full bg-brand-lime transition-all duration-1000 ease-in-out" style={{ width: `${progress}%` }}></div>
         </div>


         <div className="p-8 md:p-10 relative z-10">
           {step === 'ADDRESS' && (
             <div className="animate-in slide-in-from-right fade-in duration-500">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-right">בואו נתחיל - מה כתובת הבניין?</h2>
               <p className="text-gray-500 text-right mb-10 font-normal text-sm md:text-base">הצעת המחיר מותאמת אישית למיקום ולמאפייני הנכס.</p>
               <div className="relative mb-12">
                 <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                   <MapPin className={`${isValidAddress ? 'text-brand-lime' : 'text-gray-300'} w-6 h-6 transition-colors`} />
                 </div>
                 <input
                   ref={addressInputRef}
                   type="text"
                   placeholder="הקלידו את כתובת הבניין..."
                   className="w-full pr-14 pl-5 py-5 bg-gray-50/50 border border-gray-100 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-lime/10 focus:border-brand-lime transition-all text-right text-lg shadow-sm"
                   value={formData.address}
                   onChange={handleAddressChange}
                   autoFocus
                 />
                 {!isValidAddress && formData.address.length > 5 && (
                   <p className="text-right text-[11px] text-gray-400 mt-2 font-medium">אנא בחרו כתובת מהרשימה המופיעה</p>
                 )}
               </div>
               <button onClick={handleNextToContact} disabled={!isValidAddress && formData.address.trim().length <= 5} className="w-full flex items-center justify-center gap-3 py-5 border border-brand-lime text-brand-lime hover:bg-brand-lime/5 font-bold text-xl rounded-xl transition-all duration-300 disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed group">
                 <span>המשך</span>
                 <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
               </button>
             </div>
           )}


           {step === 'CONTACT' && (
             <form onSubmit={handleInitialSubmit} className="animate-in slide-in-from-right fade-in duration-500">
               <button type="button" onClick={() => setStep('ADDRESS')} className="flex items-center gap-2 text-gray-400 hover:text-gray-700 mb-8 transition-colors text-xs font-semibold uppercase tracking-wider">
                 <ChevronRight size={14} />
                 <span>חזרה לכתובת</span>
               </button>
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-right">מעולה. למי לשלוח את הצעת המחיר?</h2>
               <p className="text-gray-500 text-right mb-10 font-normal text-sm md:text-base">השאירו פרטים ונחזור אליכם עם ניתוח מקצועי.</p>
               <div className="space-y-5 mb-12">
                 <div className="space-y-1.5"><label className="block text-right text-xs font-bold text-gray-400 mr-1">שם מלא</label><input type="text" placeholder="" required className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-lime/10 focus:border-brand-lime transition-all text-right shadow-sm" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} /></div>
                 <div className="space-y-1.5"><label className="block text-right text-xs font-bold text-gray-400 mr-1">טלפון</label><input type="tel" required dir="ltr" className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-lime/10 focus:border-brand-lime transition-all text-right shadow-sm" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                 <div className="space-y-1.5"><label className="block text-right text-xs font-bold text-gray-400 mr-1">אימייל</label><input type="email" required className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-lime/10 focus:border-brand-lime transition-all text-right shadow-sm" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
               </div>
               <button type="submit" disabled={loading} className="group relative w-full py-6 bg-gradient-to-br from-brand-lime to-brand-forest text-white text-xl font-extrabold rounded-xl shadow-lg shadow-brand-lime/10 hover:shadow-brand-lime/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                 <div className="absolute inset-0 bg-noise opacity-[0.25] mix-blend-overlay pointer-events-none"></div>
                 {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><span>שליחת פרטים</span><ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /></>}
               </button>
             </form>
           )}


           {step === 'TECHNICAL_AUDIT' && (
             <div className="animate-in slide-in-from-right fade-in duration-500">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[16px] font-bold mb-4 border border-green-100">
                 <CheckCircle size={12} />
                 <span>הפרטים נשמרו!</span>
               </div>
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-right">נוכל לחסוך לכם שיחת אפיון?</h2>
               <p className="text-gray-500 text-right mb-8 font-normal text-sm md:text-base leading-relaxed">
                 מלאו עכשיו את נתוני הנכס וקבלו הערכת מחיר ראשונית למייל תוך 24 שעות. המידע הזה יאפשר לנו לדלג על שלב השאלות הטלפוני ולהתמקד ישר בצרכים שלכם.
               </p>
              
               <div className="space-y-8 mb-10">
                 {/* Frequencies */}
                 <div className="space-y-4">
                   <div className="text-right">
                     <label className="block text-xs font-bold text-gray-400 mb-2 mr-1">תדירות מנקה</label>
                     <div className="flex flex-wrap gap-2 justify-end">
                       {['ללא', 'פעם בשבוע', 'פעמיים בשבוע', 'יומי'].map(opt => (
                         <Chip key={opt} label={opt} active={formData.cleanerFrequency === opt} onClick={() => setFormData({...formData, cleanerFrequency: opt})} />
                       ))}
                     </div>
                   </div>
                   <div className="text-right">
                     <label className="block text-xs font-bold text-gray-400 mb-2 mr-1">תדירות גנן</label>
                     <div className="flex flex-wrap gap-2 justify-end">
                       {['ללא', 'פעם בשבועיים', 'פעם בחודש', 'פעם ברבעון'].map(opt => (
                         <Chip key={opt} label={opt} active={formData.gardenerFrequency === opt} onClick={() => setFormData({...formData, gardenerFrequency: opt})} />
                       ))}
                     </div>
                   </div>
                 </div>


                 {/* Architecture */}
                 <div className="grid grid-cols-1 gap-3">
                   <Stepper
                     label="מספר קומות"
                     value={formData.floors}
                     onAdd={() => updateNumber('floors', 1)}
                     onSub={() => updateNumber('floors', -1)}
                     onChange={(val) => handleNumberInputChange('floors', val)}
                     onBlur={() => handleBlur('floors')}
                   />
                   <Stepper
                     label="מספר דירות"
                     value={formData.apartments}
                     onAdd={() => updateNumber('apartments', 1)}
                     onSub={() => updateNumber('apartments', -1)}
                     onChange={(val) => handleNumberInputChange('apartments', val)}
                     onBlur={() => handleBlur('apartments')}
                   />
                 </div>


                 {/* Systems */}
                 <div className="grid grid-cols-1 gap-3">
                   <Toggle label="מעלית" active={formData.hasElevator} onChange={(v) => setFormData({...formData, hasElevator: v})} />
                   <Toggle label="חניון רובוטי" active={formData.hasRoboticParking} onChange={(v) => setFormData({...formData, hasRoboticParking: v})} />
                 </div>
               </div>


               <div className="space-y-4">
                 <button onClick={handleFinalSubmit} disabled={loading} className="group relative w-full py-6 bg-gradient-to-br from-brand-lime to-brand-forest text-white text-xl font-extrabold rounded-xl shadow-lg shadow-brand-lime/10 hover:shadow-brand-lime/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                   <div className="absolute inset-0 bg-noise opacity-[0.25] mix-blend-overlay pointer-events-none"></div>
                   {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><span>קבלו הערכת מחיר ראשונית</span><ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /></>}
                 </button>
                 <p className="text-[11px] text-gray-400 text-center mt-3 font-medium leading-relaxed">
                   *הצעת המחיר שתישלח היא הערכה ראשונית בלבד. הצעה סופית תינתן לאחר פגישת הכרות וסיור פיזי בבניין.
                 </p>
               </div>
             </div>
           )}


           {step === 'SUCCESS' && (
             <div className="py-16 flex flex-col items-center text-center animate-in zoom-in-95 fade-in duration-1000">
               <div className="w-24 h-24 bg-brand-lime/5 rounded-full flex items-center justify-center mb-10 relative">
                 <div className="absolute inset-0 bg-brand-lime/10 rounded-full animate-ping opacity-20 duration-[3000ms]"></div>
                 <CheckCircle className="text-brand-lime w-16 h-16 relative z-10" strokeWidth={1} />
               </div>
               <h2 className="text-3xl font-extrabold text-gray-900 mb-5">תודה! הפרטים התקבלו.</h2>
               <p className="text-lg md:text-xl text-gray-500 font-light mb-12 max-w-sm leading-relaxed">הנתונים נשלחו לצוות הניתוח שלנו. נחזור אליכם עם הצעת מחיר מפורטת בתוך 24 שעות.</p>
               <button onClick={onBack} className="px-8 py-3 text-brand-forest font-bold hover:text-brand-lime transition-all border-b-2 border-brand-lime/20 hover:border-brand-lime">חזרה לדף הבית</button>
             </div>
           )}
         </div>
       </div>
     </main>
   </div>
 );
};


export default OnboardingWizard;



