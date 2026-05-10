import "remixicon/fonts/remixicon.css";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        <h1 className="text-2xl font-bold order-1 md:order-none">
          {t.portfolio}
        </h1>

        <div className="flex gap-6 order-2 md:order-none text-sm text-zinc-400">
          <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">{t.home}</button>
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">{t.about}</button>
          <button onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">{t.project}</button>
        </div>

        <div className="flex gap-3 order-3 md:order-none">
          <a href="https://github.com/kerxl" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill ri-2x"></i></a>
          <a href="https://t.me/kerxl" target="_blank" rel="noopener noreferrer"><i className="ri-telegram-fill ri-2x"></i></a>
        </div>

      </div>
    </div>
  );
};

export default Footer;