import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const { language, toggleLanguage } = useLanguage();
  const [active, setActive] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
          {t.portfolio}
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`flex items-center sm:gap-10 gap-4 
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
          md:opacity-100 bg-white/10 backdrop-blur-md 
          md:bg-transparent md:backdrop-blur-none
          p-4 rounded-br-2xl rounded-bl-2xl 
          transition-all md:transition-none
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li><a href="#home" className="sm:text-lg text-base font-medium">{t.home}</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">{t.about}</a></li>
        <li><a href="#project" className="sm:text-lg text-base font-medium">{t.project}</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">{t.contactMe}</a></li>
      </ul>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="ml-4 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer outline-none transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(145deg, rgba(80,80,80,0.9), rgba(50,50,50,0.9))',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(145deg, rgba(100,100,100,0.9), rgba(60,60,60,0.9))';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(145deg, rgba(80,80,80,0.9), rgba(50,50,50,0.9))';
        }}
      >
        {language === 'ru' ? 'EN' : 'RU'}
      </button>
    </nav>
  );
};

export default Navbar;
