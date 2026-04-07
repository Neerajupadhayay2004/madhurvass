import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-warm-brown text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-divine-glow mb-3">
              🪷 Madhur Vas Homestay
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Experience divine living in the heart of Mathura. A peaceful, culturally rich homestay near sacred temples.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-divine-glow mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: t("home") },
                { to: "/rooms", label: t("rooms_booking") },
                { to: "/culture", label: t("cultural_experience") },
                { to: "/temples", label: t("temple_guide") },
                { to: "/contact", label: t("contact") },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/70 hover:text-divine-glow transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-divine-glow mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>📧 Agshobh@gmail.com</p>
              <p>📞 +91 9193232929</p>
              <p>📞 +91 9557660360</p>
              <p>📍 Near Krishna Janmabhoomi, Mathura, UP, India</p>
              <a
                href="https://wa.me/919193232929"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-green-600 text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="font-heading text-lg italic text-divine-glow mb-1">
            {t("footer_quote")}
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Madhur Vas Mathura Homestay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
