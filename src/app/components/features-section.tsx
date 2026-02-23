import { Smartphone, Zap, Search, MessageCircle, BarChart3, Layout } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Layout,
      title: "بنية واضحة ومنطقية",
      description: "كل قسم يخدم هدفًا واحدًا، والمعلومات منظمة بطريقة تسهّل القرار"
    },
    {
      icon: Smartphone,
      title: "مُحسّن للجوال أولاً",
      description: "تجربة سلسة وسريعة على كل الأجهزة، لأن معظم زوارك من الهواتف"
    },
    {
      icon: Zap,
      title: "سرعة فائقة في التحميل",
      description: "نستخدم أحدث التقنيات لضمان تحميل الموقع في أقل من ثانيتين"
    },
    {
      icon: Search,
      title: "أساسيات SEO مضمنة",
      description: "الموقع جاهز للظهور في محركات البحث من أول يوم"
    },
    {
      icon: MessageCircle,
      title: "تكامل مع WhatsApp",
      description: "زر تواصل واضح ومباشر في كل الصفحات لتسهيل التواصل الفوري"
    },
    {
      icon: BarChart3,
      title: "تتبع وتحليلات",
      description: "ربط مع Google Analytics لمعرفة أداء الموقع وسلوك الزوار"
    }
  ];

  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#03045E]/10 text-[#03045E] rounded-full mb-4" style={{ fontWeight: 600 }}>
             ماذا ستحصل عليه
            </div>
            <h2 className="text-3xl md:text-5xl text-[#1F1F1F] mb-6" style={{ fontWeight: 700 }}>
              موقع <span className="text-[#FC54BB]">Rokinso</span> يشمل
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             كل ما تحتاجه لنجاحك الرقمي من اليوم الأول
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-[#FC54BB] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#03045E] to-[#802C8D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-[#1F1F1F] mb-3" style={{ fontWeight: 700 }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-6">
              كل هذا بسعر شفاف وبدون تكاليف خفية
            </p>
            <button 
              onClick={() => window.open('https://wa.me/905421199097', '_blank')}
              className="bg-[#03045E] hover:bg-[#02033a] text-white px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontWeight: 600 }}
            >
              احجز استشارة لمناقشة مشروعك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
