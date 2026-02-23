import { Check, Rocket, Building2, TrendingUp } from "lucide-react";

export function PricingSection() {
  const packages = [
    {
      icon: Rocket,
      name: "إطلاق",
      description: "للشركات الناشئة والأعمال الصغيرة",
      features: [
        "موقع من 3-5 صفحات",
        "تصميم احترافي مخصص",
        "مُحسّن للجوال والسرعة",
        "تكامل WhatsApp",
        "نموذج تواصل واحد",
        "دعم فني لمدة شهر"
      ],
      note: "مثالي للبدء السريع بتواجد احترافي",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      name: "أعمال",
      description: "للشركات المتوسطة والخدمية",
      features: [
        "موقع من 6-10 صفحات",
        "تصميم متقدم وهوية بصرية",
        "SEO أساسي مضمّن",
        "تكامل مع أنظمة الحجز",
        "نماذج متعددة",
        "تحليلات وتتبع متقدم",
        "دعم فني لمدة 3 أشهر"
      ],
      note: "الخيار الأكثر شعبية للشركات الجادة",
      color: "from-[#FC54BB] to-[#802C8D]",
      popular: true
    },
    {
      icon: TrendingUp,
      name: "نمو",
      description: "للشركات الكبرى والمتاجر الإلكترونية",
      features: [
        "موقع غير محدود الصفحات",
        "تصميم مخصص بالكامل",
        "SEO متقدم واستراتيجية محتوى",
        "تكامل كامل مع الأنظمة",
        "لوحة تحكم مخصصة",
        "استشارات تسويقية شهرية",
        "دعم فني غير محدود"
      ],
      note: "حل شامل للنمو والتوسع",
      color: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B0F2D] via-[#10143A] to-[#1C0F2E] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 text-[#FC54BB] rounded-full mb-4" style={{ fontWeight: 600 }}>
              الباقات والأسعار
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              اختر الباقة المناسبة<br />
              <span className="text-[#FC54BB]">لحجم مشروعك وأهدافك</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              الأسعار النهائية تُحدد بعد الاستشارة المجانية بناءً على احتياجاتك الفعلية
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div 
                  key={index}
                  className={`relative bg-white/5 rounded-2xl border ${
                    pkg.popular ? 'border-[#FC54BB] shadow-2xl scale-105' : 'border-white/10'
                  } overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white/10`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-[#FC54BB] text-white px-6 py-1 rounded-full text-sm" style={{ fontWeight: 600 }}>
                      الأكثر طلباً
                    </div>
                  </div>
                )}

                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white`}>
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
                      {pkg.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Check className="w-5 h-5 text-[#FC54BB]" strokeWidth={3} />
                          </div>
                          <span className="text-white/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Note */}
                    <div className="p-4 bg-white/5 rounded-lg mb-6 border border-white/10">
                      <p className="text-sm text-white/70">
                        {pkg.note}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => window.open('https://wa.me/905421199097', '_blank')}
                      className={`w-full py-3 rounded-lg transition-all duration-300 ${
                        pkg.popular 
                          ? 'bg-[#FC54BB] hover:bg-[#e64aa9] text-white shadow-lg' 
                          : 'bg-white/10 hover:bg-[#FC54BB] text-white hover:text-white'
                      }`}
                      style={{ fontWeight: 600 }}
                    >
                      احجز استشارة مجانية
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 p-8 bg-white/5 rounded-2xl border-r-4 border-[#FC54BB] text-center">
            <p className="text-lg text-white/80" style={{ fontWeight: 500 }}>
              💡 <span style={{ fontWeight: 700 }}>ملاحظة مهمة:</span> السعر النهائي يُحدد بعد فهم احتياجاتك بدقة.
              <br />
              الاستشارة مجانية بالكامل وبدون أي التزام.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
