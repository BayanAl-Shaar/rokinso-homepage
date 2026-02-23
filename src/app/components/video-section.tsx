import { Play, Check } from "lucide-react";

export function VideoSection() {
  const rules = [
    "وضوح الرسالة: الزائر يفهم ماذا تقدم خلال 5 ثوانٍ",
    "سهولة التصفح: كل زر وكل قسم في مكانه المنطقي",
    "سرعة التحميل: لا أحد ينتظر أكثر من ثانيتين"
  ];

  return (
    <>
      {/*
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            {/*</><div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-[#1F1F1F] mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
                ثلاث قواعد لا يتنازل عنها<br />
                <span className="text-[#FC54BB]">أي موقع ناجح</span>
              </h2>
            </div>

            {/* Video and Content Grid */}
            {/*<div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Video Placeholder */}
              {/*<div className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-[#03045E] to-[#802C8D] rounded-2xl overflow-hidden relative">
                  {/* Background Pattern */}
                  {/*<div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }} />
                  </div>
                  {/* Play Button */}
                  {/*<div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                      <div className="w-16 h-16 bg-[#FC54BB] rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-white mr-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {/*<div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
                    2:45
                  </div>
                </div>

                {/* Caption */}
                {/*<p className="text-sm text-gray-500 mt-3 text-center">
                  شاهد كيف نطبق هذه القواعد في كل مشروع
                </p>
              </div>

              {/* Rules List */}
              {/*</><div className="space-y-6">
                {rules.map((rule, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-6 bg-gradient-to-r from-[#03045E]/5 to-transparent rounded-xl border-r-4 border-[#FC54BB] hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#03045E] to-[#802C8D] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-[#1F1F1F]" style={{ fontWeight: 600 }}>
                        {rule.split(':')[0]}
                      </p>
                      <p className="text-gray-600 mt-1">
                        {rule.split(':')[1]}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom Note */}
                {/*<div className="pt-6">
                  <p className="text-lg text-gray-700" style={{ fontWeight: 500 }}>
                    هذه ليست "نصائح تصميمية"، بل{' '}
                    <span className="text-[#FC54BB]" style={{ fontWeight: 700 }}>
                      قواعد مبنية على سلوك المستخدمين الحقيقي
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B0F2D] via-[#10143A] to-[#1C0F2E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-white mb-6 md:leading-snug" style={{ fontWeight: 700 }}>
                ثلاث قواعد لا يتنازل عنها<br />
                <span className="text-[#FC54BB]">أي موقع ناجح</span>
              </h2>
            </div>

            {/* Video and Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Video Placeholder */}
              <div className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-[#111B6B] to-[#5A1B6F] rounded-2xl overflow-hidden relative border border-white/10">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }} />
                  </div>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                      <div className="w-16 h-16 bg-[#FC54BB] rounded-full flex items-center justify-center shadow-lg shadow-[#FC54BB]/40">
                        <Play className="w-8 h-8 text-white mr-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
                    2:45
                  </div>
                </div>

                {/* Caption */}
                <p className="text-sm text-white/70 mt-3 text-center">
                  شاهد كيف نطبق هذه القواعد في كل مشروع
                </p>
              </div>

              {/* Rules List */}
              <div className="space-y-6">
                {rules.map((rule, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-6 bg-white/5 rounded-xl border-r-4 border-[#FC54BB] hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1C2A8C] to-[#802C8D] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-white" style={{ fontWeight: 600 }}>
                        {rule.split(':')[0]}
                      </p>
                      <p className="text-white/70 mt-1">
                        {rule.split(':')[1]}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom Note */}
                <div className="pt-6">
                  <p className="text-lg text-white/80" style={{ fontWeight: 500 }}>
                    هذه ليست "نصائح تصميمية"، بل{' '}
                    <span className="text-[#FC54BB]" style={{ fontWeight: 700 }}>
                      قواعد مبنية على سلوك المستخدمين الحقيقي
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
