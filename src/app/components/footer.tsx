import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo-2.png";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="flex items-center gap-3 isolate">
                  <img src={logo} alt="Rokinso" className="h-16 w-auto bg-[#1F1F1F] mix-blend-multiply" />
                  <h3 className="text-3xl" style={{ fontWeight: 700 }}>
                    <span className="text-[#FC54BB]"></span>
                  </h3>
                </div>
                <p className="text-white/70 mt-2">
                  نبني مواقع تحوّل الزوار إلى عملاء
                </p>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                شركة متخصصة في تطوير المواقع الإلكترونية الاحترافية التي تُبنى بعقلية البيع والتحويل، لا التصميم فقط.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FC54BB] rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FC54BB] rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FC54BB] rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FC54BB] rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>روابط سريعة</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <a href="#portfolio" className="hover:text-[#FC54BB] transition-colors">أعمالنا</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FC54BB] transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FC54BB] transition-colors">المدونة</a>
                </li>
                <li>
                  <a href="#consultation-form" className="hover:text-[#FC54BB] transition-colors">تواصل معنا</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>تواصل معنا</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FC54BB] flex-shrink-0 mt-0.5" />
                  <span dir="ltr">+966 50 123 4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FC54BB] flex-shrink-0 mt-0.5" />
                  <span>info@rokinso.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FC54BB] flex-shrink-0 mt-0.5" />
                  <span>الرياض، المملكة العربية السعودية</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <p>
                © 2025 Rokinso. جميع الحقوق محفوظة.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#FC54BB] transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-[#FC54BB] transition-colors">الشروط والأحكام</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
