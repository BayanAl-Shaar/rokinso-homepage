import { Check, TrendingUp } from "lucide-react";

export function ValueSection() {
  const benefits = [
    "رسالة واضحة: الزائر يفهم ماذا تقدم خلال 3 ثوانٍ",
    "تصفح بديهي: كل زر، كل قسم، كل حركة مدروسة لتوجيه الزائر",
    "سرعة فائقة: يتحمل في أقل من ثانيتين حتى على بيانات الجوال",
    "احترافية تُشعر بالثقة من أول نظرة",
    "نقاط تواصل واضحة في كل قسم: WhatsApp، نموذج، مكالمة",
    "تجربة سلسة على كل الأجهزة"
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#03045E] to-[#1F1F1F] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FC54BB] text-white rounded-full mb-4" style={{ fontWeight: 600 }}>
              <TrendingUp className="w-4 h-4" />
              الحل الذكي
            </div>
            <h2 className="text-3xl md:text-5xl mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              ماذا يحدث عندما يُبنى الموقع<br />
              <span className="text-[#FC54BB]">بعقلية البيع، لا التصميم فقط؟</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              يتحول من "عرض جميل" إلى "مندوب مبيعات يعمل 24/7"
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#FC54BB] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-white text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="relative p-8 md:p-10 bg-gradient-to-r from-[#FC54BB] to-[#802C8D] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
                الفرق بين موقع "عادي" وموقع "مُحوِّل" هو الوضوح والثقة والسرعة
              </p>
              <p className="text-lg md:text-xl mt-4 text-white/90">
                وهذا بالضبط ما نبنيه في Rokinso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
