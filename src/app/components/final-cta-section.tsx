import { useState } from "react";
import { Send, CheckCircle2, Shield } from "lucide-react";

export function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `مرحباً، أرغب في حجز استشارة مجانية:
    
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
نوع المشروع: ${formData.projectType}
${formData.message ? `تفاصيل المشروع: ${formData.message}` : ''}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905421199097?text=${encodedMessage}`, '_blank');
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", projectType: "", message: "" });
    }, 3000);
  };

  return (
    <section id="consultation-form" className="py-20 md:py-28 bg-gradient-to-br from-[#03045E] via-[#03045E] to-[#802C8D] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              جاهز لموقع يحوّل الزوار<br />
              <span className="text-[#FC54BB]">إلى عملاء حقيقيين؟</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              احجز استشارة مجانية الآن ودعنا نناقش مشروعك بالتفصيل
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-white mb-2 text-right" style={{ fontWeight: 500 }}>
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FC54BB] transition-colors text-right"
                      placeholder="أدخل اسمك"
                      dir="rtl"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-white mb-2 text-right" style={{ fontWeight: 500 }}>
                      رقم الجوال (واتساب) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FC54BB] transition-colors text-right"
                      placeholder="05xxxxxxxx"
                      dir="rtl"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-white mb-2 text-right" style={{ fontWeight: 500 }}>
                      نوع المشروع *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FC54BB] transition-colors text-right"
                      dir="rtl"
                    >
                      <option value="" className="text-gray-800">اختر نوع المشروع</option>
                      <option value="startup" className="text-gray-800">شركة ناشئة</option>
                      <option value="service" className="text-gray-800">شركة خدمية</option>
                      <option value="ecommerce" className="text-gray-800">متجر إلكتروني</option>
                      <option value="healthcare" className="text-gray-800">عيادة / مركز طبي</option>
                      <option value="education" className="text-gray-800">تعليم / تدريب</option>
                      <option value="other" className="text-gray-800">أخرى</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-white mb-2 text-right" style={{ fontWeight: 500 }}>
                      أخبرنا عن مشروعك (اختياري)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FC54BB] transition-colors resize-none text-right"
                      placeholder="ما هي أهدافك من الموقع؟"
                      dir="rtl"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#FC54BB] hover:bg-[#e64aa9] text-white py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{ fontWeight: 600 }}
                  >
                    أرسل الطلب الآن
                    <Send className="w-5 h-5" />
                  </button>

                  {/* Privacy Note */}
                  <div className="flex items-start gap-3 pt-4">
                    <Shield className="w-5 h-5 text-[#FC54BB] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/70 text-right">
                      نحترم خصوصيتك. لن نرسل لك أي رسائل دعائية. سنتواصل معك عبر واتساب فقط لمناقشة مشروعك.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#FC54BB]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#FC54BB]" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>
                    شكراً لك! 🎉
                  </h3>
                  <p className="text-white/90 text-lg">
                    تم استلام طلبك بنجاح<br />
                    سنتواصل معك عبر واتساب خلال 24 ساعة
                  </p>
                </div>
              )}
            </div>

            {/* Why Book Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-6" style={{ fontWeight: 700 }}>
                  ماذا يحدث بعد حجز الاستشارة؟
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FC54BB]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FC54BB]" style={{ fontWeight: 700 }}>1</span>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1" style={{ fontWeight: 600 }}>نتواصل معك خلال 24 ساعة</h4>
                    <p className="text-white/80">عبر واتساب لتحديد موعد المكالمة المناسب لك</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FC54BB]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FC54BB]" style={{ fontWeight: 700 }}>2</span>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1" style={{ fontWeight: 600 }}>نفهم احتياجاتك بدقة</h4>
                    <p className="text-white/80">نناقش أهدافك، جمهورك، ومنافسيك لمدة 20-30 دقيقة</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FC54BB]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FC54BB]" style={{ fontWeight: 700 }}>3</span>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1" style={{ fontWeight: 600 }}>نقدم لك خطة واضحة</h4>
                    <p className="text-white/80">تقدير السعر، المدة الزمنية، والخطوات التالية</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mt-8">
                <p className="text-lg" style={{ fontWeight: 500 }}>
                  ✨ <span style={{ fontWeight: 700 }}>الاستشارة مجانية بالكامل</span> وبدون أي التزام.
                  <br />
                  حتى لو قررت عدم المتابعة، ستحصل على قيمة حقيقية من المكالمة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#FC54BB] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#802C8D] rounded-full blur-3xl opacity-20" />
    </section>
  );
}