import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "لماذا أدفع على موقع جديد إذا كان عندي موقع حالي؟",
      answer: "إذا كان موقعك الحالي لا يجلب لك عملاء أو يحتاج إلى شرح للزوار، فهو ليس أصلاً — بل عبء. الموقع الجيد يجب أن يعمل كمندوب مبيعات 24/7، لا كديكور رقمي."
    },
    {
      question: "كم يستغرق بناء الموقع؟",
      answer: "عادةً من 3-4 أسابيع من بداية المشروع حتى الإطلاق. لكن المدة تعتمد على حجم الموقع ومدى جاهزية المحتوى (النصوص، الصور) من طرفك."
    },
    {
      question: "هل تقدمون الدعم بعد الإطلاق؟",
      answer: "نعم، جميع الباقات تشمل فترة دعم فني مجاني (من شهر إلى غير محدود حسب الباقة). بعدها يمكنك الاشتراك في خطة دعم شهرية أو التواصل معنا عند الحاجة."
    },
    {
      question: "هل أحتاج إلى خبرة تقنية لإدارة الموقع؟",
      answer: "لا على الإطلاق. نسلمك الموقع جاهزاً ونعطيك تدريباً بسيطاً على كيفية تحديث المحتوى الأساسي. كل شيء مصمم ليكون سهلاً وواضحاً."
    },
    {
      question: "ماذا لو لم يعجبني التصميم؟",
      answer: "نعمل معك خطوة بخطوة: من التشخيص إلى التصميم إلى التطوير. لن ننتقل لأي مرحلة إلا بعد موافقتك. تحصل على جولة مراجعة مجانية، وأي تعديلات إضافية بأسعار واضحة."
    },
    {
      question: "هل تكتبون المحتوى (النصوص) أم نحن؟",
      answer: "نحن نساعدك في صياغة الرسائل الأساسية والعناوين. لكن إذا كنت تريد كتابة محتوى كامل احترافي، نقدم هذه الخدمة بشكل منفصل أو ضمن الباقات المتقدمة."
    },
    {
      question: "هل الموقع مُحسّن لمحركات البحث (SEO)؟",
      answer: "نعم، جميع المواقع تُبنى بأساسيات SEO: سرعة التحميل، البنية الصحيحة، العناوين، الوصف، التوافق مع الجوال. إذا كنت تريد استراتيجية SEO متقدمة، نقدمها في الباقات الأعلى."
    },
    {
      question: "هل أملك الموقع بالكامل بعد التسليم؟",
      answer: "نعم، بعد استلام المبلغ النهائي، تحصل على ملكية كاملة للموقع والكود. يمكنك نقله إلى أي شركة استضافة تريدها."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#03045E]/10 text-[#03045E] rounded-full mb-4" style={{ fontWeight: 600 }}>
              الأسئلة الشائعة
            </div>
            <h2 className="text-3xl md:text-5xl text-[#1F1F1F] mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              كل ما قد تحتاج معرفته<br />
              <span className="text-[#FC54BB]">قبل البدء</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#FC54BB]/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between gap-4 text-right hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-[#1F1F1F] text-right flex-1" style={{ fontWeight: 600 }}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FC54BB]/10 rounded-lg flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#FC54BB]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#FC54BB]" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-right">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              لديك سؤال آخر؟
            </p>
            <button 
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#03045E] hover:bg-[#02033a] text-white px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontWeight: 600 }}
            >
              تحدث معنا مباشرة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
