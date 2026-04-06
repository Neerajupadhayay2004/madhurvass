import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-warm-brown text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-divine-glow mb-3">
            🪷 MadhurVass Homestay
          </h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Experience divine living in the heart of Mathura. A peaceful, culturally rich homestay near sacred temples.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-divine-glow mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/rooms", label: "Rooms & Booking" },
              { to: "/culture", label: "Cultural Experience" },
              { to: "/temples", label: "Temple Guide" },
              { to: "/contact", label: "Contact Us" },
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
            <p>📞 +91 9323292299</p>
            <p>📍 Mathura, Uttar Pradesh, India</p>
            <a
              href="https://wa.me/9193232929"
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
          "अतिथि देवो भव" — Atithi Devo Bhava
        </p>
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} MadhurVass Mathura Homestay. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
