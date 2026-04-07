import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "hi";

interface Translations {
  [key: string]: { en: string; hi: string };
}

export const translations: Translations = {
  home: { en: "Home", hi: "होम" },
  rooms_booking: { en: "Rooms & Booking", hi: "कमरे और बुकिंग" },
  cultural_experience: { en: "Cultural Experience", hi: "सांस्कृतिक अनुभव" },
  temple_guide: { en: "Temple Guide", hi: "मंदिर गाइड" },
  contact: { en: "Contact", hi: "संपर्क" },
  booking: { en: "Booking", hi: "बुकिंग" },
  book_now: { en: "Book Now", hi: "अभी बुक करें" },

  welcome: { en: "🙏 Radhe Radhe — Welcome to Madhur Vas", hi: "🙏 राधे राधे — मधुर वास में आपका स्वागत है" },
  hero_title_1: { en: "Experience Divine Living", hi: "दिव्य जीवन का अनुभव करें" },
  hero_title_2: { en: "in the Heart of", hi: "के हृदय में" },
  mathura: { en: "Mathura", hi: "मथुरा" },
  hero_desc: {
    en: "A culturally rich homestay where comfort meets sacred tradition.",
    hi: "एक सांस्कृतिक होमस्टे जहां आराम और परंपरा मिलते हैं।"
  },

  book_your_stay: { en: "🏠 Book Your Stay", hi: "🏠 अपना ठहराव बुक करें" },
  explore_culture: { en: "🌸 Explore Culture", hi: "🌸 संस्कृति जानें" },

  whatsapp_us: { en: "💬 WhatsApp Us", hi: "💬 व्हाट्सएप करें" },
  send_email: { en: "📧 Send Email", hi: "📧 ईमेल भेजें" },
  get_directions: { en: "📍 Get Directions", hi: "📍 रास्ता देखें" },
  submit_booking: { en: "🙏 Submit Booking", hi: "🙏 बुकिंग सबमिट करें" },

  address: {
    en: "📍 Near Krishna Janmabhoomi, Mathura, UP",
    hi: "📍 कृष्ण जन्मभूमि के पास, मथुरा"
  },

  booking_received: {
    en: "Radhe Radhe! Booking Received",
    hi: "राधे राधे! बुकिंग प्राप्त हुई"
  },

  pay_via_upi: { en: "Pay via UPI", hi: "UPI से भुगतान करें" },

  booking_saved: {
    en: "🙏 Booking saved successfully!",
    hi: "🙏 बुकिंग सफलतापूर्वक सेव हो गई!"
  },

  footer_quote: {
    en: "'Atithi Devo Bhava'",
    hi: "'अतिथि देवो भव'"
  }
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
