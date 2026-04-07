import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
    const { lang, setLang } = useLanguage();

    return (
        <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="fixed top-20 md:top-24 right-4 z-50 bg-card border border-border shadow-warm rounded-full px-3 py-1.5 text-xs font-semibold hover:shadow-golden transition-all hover:scale-105"
            aria-label="Switch language"
        >
            {lang === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
        </button>
    );
};

export default LanguageSwitcher;
