import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/905421199097', '_blank');
  };

  return (
    <>
      {/* Mobile Sticky Button */}
      <div className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <button 
          onClick={handleClick}
          className="w-full bg-[#FC54BB] hover:bg-[#e64aa9] text-white py-4 px-6 rounded-full shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
          style={{ fontWeight: 600 }}
        >
          <MessageCircle className="w-5 h-5" />
          احجز استشارة مجانية
        </button>
      </div>

      {/* Desktop Floating Button */}
      <div className={`hidden md:block fixed bottom-8 left-8 z-50 transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
      }`}>
        <button 
          onClick={handleClick}
          className="bg-[#FC54BB] hover:bg-[#e64aa9] text-white py-4 px-8 rounded-full shadow-2xl flex items-center gap-3 transform hover:scale-105 transition-all"
          style={{ fontWeight: 600 }}
        >
          <MessageCircle className="w-5 h-5" />
          احجز استشارة مجانية
        </button>
      </div>
    </>
  );
}