import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { useLanguage } from "../LanguageContext";
import translations from "../i18n";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const items = [
    { icon: <VscHome size={18} />, label: t.home, onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: t.about, onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: t.project, onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Judul - paling atas di mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          {t.portfolio}
        </h1>

        {/* Ikon Sosmed - di tengah di mobile */}
        <div className="flex gap-3 order-2 md:order-none">
          <a href="https://github.com/kerxl"><i className="ri-github-fill ri-2x"></i></a>
          <a href="https://t.me/kerxl"><i className="ri-telegram-fill ri-2x"></i></a>
        </div>

        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
