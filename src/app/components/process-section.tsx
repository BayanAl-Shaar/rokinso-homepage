import { Search, Palette, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "التشخيص",
      description: "نفهم نشاطك، جمهورك، وأهدافك. نحلل المنافسين ونحدد الرسالة الأساسية",
      duration: "1-2 أيام"
    },
    {
      number: "02",
      icon: Palette,
      title: "التصميم",
      description: "نصمم الهيكل والواجهة بناءً على أفضل ممارسات التحويل، لا على الذوق فقط",
      duration: "5-7 أيام"
    },
    {
      number: "03",
      icon: Rocket,
      title: "التطوير والإطلاق",
      description: "نبني الموقع، نختبره على كل الأجهزة، ونسلمه جاهزًا مع التدريب والدعم",
      duration: "2-3 أسابيع"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FC54BB]/10 text-[#FC54BB] rounded-full mb-4" style={{ fontWeight: 600 }}>
              كيف نعمل
            </div>
            <h2 className="text-3xl md:text-5xl text-[#1F1F1F] mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              عملية واضحة ومنظمة<br />
              <span className="text-[#03045E]">بدون فوضى أو تعقيد</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              3 خطوات فقط من الفكرة إلى الإطلاق
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#03045E] via-[#FC54BB] to-[#802C8D] opacity-20" />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#FC54BB] transition-all duration-300 hover:shadow-xl relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#03045E] to-[#802C8D] rounded-full flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FC54BB]/10 to-[#802C8D]/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-[#FC54BB]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-[#1F1F1F] mb-4" style={{ fontWeight: 700 }}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#03045E]/5 rounded-full">
                      <div className="w-2 h-2 bg-[#FC54BB] rounded-full" />
                      <span className="text-sm text-[#03045E]" style={{ fontWeight: 600 }}>
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#03045E] to-[#802C8D] rounded-2xl text-white text-center">
            <p className="text-2xl mb-2" style={{ fontWeight: 700 }}>
              المدة الإجمالية: 3-4 أسابيع فقط
            </p>
            <p className="text-lg text-white/90">
              من الاستشارة الأولى إلى الإطلاق الكامل مع التدريب والدعم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
