import { ArrowLeft, PlayCircle } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    window.open("https://wa.me/905421199097", "_blank");
  };

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] pt-16 md:pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#03045E] via-[#03045E] to-[#802C8D] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl mb-6 md:leading-snug"
            style={{ fontWeight: 700 }}
          >
            نحوّل أفكارك إلى 
            <br />
            <span className="text-[#FC54BB]">
              حلول رقمية ناجحة
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
             مواقع احترافية، تطبيقات ذكية، وتسويق رقمي يساعدك على جذب العملاء وزيادة النمو

            <br className="hidden md:block" />
                      </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToForm}
              className="group bg-[#FC54BB] hover:bg-[#e64aa9] text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontWeight: 600 }}
            >
              احجز استشارة مجانية
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToPortfolio}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              شاهد أمثلة أعمالنا
              <PlayCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FC54BB] rounded-full" />
              <span>
                تصميم احترافي متوافق مع جميع الأجهزة
                (Mobile-First)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FC54BB] rounded-full" />
              <span>دعم مستمر</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FC54BB] rounded-full" />
              <span>
                تجربة مستخدم مدروسة لزيادة التحويل والمبيعات
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FC54BB] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#802C8D] rounded-full blur-3xl opacity-20" />
    </section>
  );
}
