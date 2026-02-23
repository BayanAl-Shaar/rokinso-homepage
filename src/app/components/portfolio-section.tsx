import { ArrowUpRight, Zap, TrendingUp, Users } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      name: " منصة دليل التعليمية",
      url: "https://dalilacademy.net/",
      industry: "التعليم",
      improvements: [
        { icon: Zap, label: "سرعة التحميل", value: "+85%" },
        { icon: TrendingUp, label: "معدل التحويل", value: "+120%" }
      ],
      gradient: "from-[#51AEB1] via-[#6F6A7A] to-[#90191C]"
    },
    {
      name: "healthitechs",
      url: "https://healthitechs.com/",
      industry: "التغذية و الصحة",
      improvements: [
        { icon: Users, label: "طلبات الاستشارة", value: "+95%" },
        { icon: Zap, label: "تحسين البنية", value: "+100%" }
      ],
      gradient: "from-[#2F8C57] to-[#AEDF33]"
    },
    {
      name: "ستراتيكا",
      url: "https://struttica.com/",
      industry: "الهندسة و الإنشاء",
      improvements: [
        { icon: TrendingUp, label: "التسجيلات", value: "+150%" },
        { icon: Users, label: "زيادة الزوار", value: "+80%" }
      ],
      gradient: "from-zinc-800 via-slate-800 to-neutral-900"
    }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#03045E]/10 text-[#03045E] rounded-full mb-4" style={{ fontWeight: 600 }}>
              أعمالنا
            </div>
            <h2 className="text-3xl md:text-5xl text-[#1F1F1F] mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              مواقع حققت نتائج حقيقية<br />
              <span className="text-[#FC54BB]">لعملاء حقيقيين</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ليست مجرد تصاميم جميلة، بل حلول زادت المبيعات والحجوزات بشكل ملموس
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group cursor-pointer bg-white rounded-2xl border-2 border-gray-100 hover:border-[#FC54BB] transition-all duration-300 overflow-hidden hover:shadow-2xl"
              >
                {/* Project Header with Gradient */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>
                      {project.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {project.industry}
                    </p>
                  </div>
                </div>

                {/* Improvements */}
                <div className="p-6 space-y-4">
                  {project.improvements.map((improvement, idx) => {
                    const Icon = improvement.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[#03045E]" />
                          </div>
                          <span className="text-gray-600 text-sm">
                            {improvement.label}
                          </span>
                        </div>
                        <span className="text-[#FC54BB] text-lg" style={{ fontWeight: 700 }}>
                          {improvement.value}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* View Button */}
                <div className="px-6 pb-6">
                  <div className="w-full py-3 cursor-pointer bg-gray-50 hover:bg-[#03045E] text-[#03045E] hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg" style={{ fontWeight: 600 }}>
                    عرض المشروع
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              هل تريد نتائج مشابهة لمشروعك؟
            </p>
            <button 
              onClick={() => window.open('https://wa.me/905421199097', '_blank')}
              className="cursor-pointer bg-[#FC54BB] hover:bg-[#e64aa9] text-white px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontWeight: 600 }}
            >
              احجز استشارة مجانية الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
