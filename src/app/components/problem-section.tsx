import { X } from "lucide-react";

export function ProblemSection() {
  const problems = [
    "المعلومات مشتتة والزائر لا يفهم ماذا تقدم خلال 5 ثوانٍ",
    "التصفح معقد والقوائم غير واضحة",
    "بطيء جدًا في التحميل — الزائر يغادر قبل أن يرى شيئًا",
    "لا يوحي بالثقة ولا يُشعر الزائر بالاحترافية",
    "غير مُحسّن للهواتف رغم أن 80% من الزوار من الجوال",
    "لا توجد دعوة واضحة للتواصل أو الحجز"
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4" style={{ fontWeight: 600 }}>
              المشكلة الحقيقية
            </div>
            <h2 className="text-3xl md:text-5xl text-[#1F1F1F] mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
              لماذا معظم المواقع تبدو جميلة<br />
              <span className="text-[#03045E]">لكن لا تجلب عملاء؟</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              لأنها صُممت للنظر إليها، لا للتفاعل معها والشراء من خلالها
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-red-50/50 rounded-xl border-2 border-red-100 hover:border-red-200 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-[#1F1F1F] text-lg">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#03045E]/5 to-[#802C8D]/5 rounded-xl border-r-4 border-[red] ">
            <p className="text-xl text-[#1F1F1F] text-red-600" style={{ fontWeight: 500 }}>
              النتيجة: <span className="text-[#FC54BB] text-red-600" style={{ fontWeight: 700 }}>
                تدفع آلاف الدولارات على الإعلانات، لكن الموقع لا يُقنع الزائر بالتواصل معك
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
