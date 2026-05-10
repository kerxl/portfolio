import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useLanguage } from '../../LanguageContext';
import translations from '../../i18n';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // State untuk mengontrol animasi penutupan
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi untuk menangani penutupan dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi selesai (300ms) sebelum memanggil onClose dari props
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset state untuk pembukaan berikutnya
    }, 300);
  };

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    // Overlay
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat diklik di dalam
        className={`bg-zinc-900 border border-violet-500/50 rounded-2xl shadow-2xl shadow-violet-500/20 w-full max-w-lg transform transition-transform duration-300 ${isClosing ? 'animate-out' : 'animate-in'} max-h-[90vh] overflow-y-auto`}
      >
        {/* --- PROJECT IMAGE --- */}
        <div className="w-full aspect-video overflow-hidden bg-black/40">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-white">{t[`project${project.id}Title`] || project.title}</h2>
                <button
                    onClick={handleClose}
                    className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
                >
                    <FiX size={24} />
                </button>
            </div>

            {/* --- COMPANY AND PERIOD --- */}
            <div className="flex items-center gap-3 text-sm text-zinc-400 border-b border-zinc-700 pb-4">
                <span className="font-semibold text-violet-400">{t[`project${project.id}Company`] || project.company}</span>
                <span>•</span>
                <span>{t[`project${project.id}Period`] || project.period}</span>
            </div>

            {/* --- RESPONSIBILITIES --- */}
            <div>
                <h3 className="text-lg font-semibold text-violet-300 mb-2">{t.responsibilities}</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    {project.id === 1 ? (
                        <>
                            <li key="resp1" className="pl-2">{t.project1Resp1}</li>
                            <li key="resp2" className="pl-2">{t.project1Resp2}</li>
                            <li key="resp3" className="pl-2">{t.project1Resp3}</li>
                        </>
                    ) : project.id === 2 ? (
                        <>
                            <li key="resp1" className="pl-2">{t.project2Resp1}</li>
                            <li key="resp2" className="pl-2">{t.project2Resp2}</li>
                            <li key="resp3" className="pl-2">{t.project2Resp3}</li>
                        </>
                    ) : (
                        <>
                            <li key="resp1" className="pl-2">{t.project3Resp1}</li>
                            <li key="resp2" className="pl-2">{t.project3Resp2}</li>
                        </>
                    )}
                </ul>
            </div>

            {/* --- KEY ACHIEVEMENTS --- */}
            <div>
                <h3 className="text-lg font-semibold text-violet-300 mb-2">{t.keyAchievements}</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    {project.id === 1 ? (
                        <>
                            <li key="ach1" className="pl-2">{t.project1Ach1}</li>
                            <li key="ach2" className="pl-2">{t.project1Ach2}</li>
                            <li key="ach3" className="pl-2">{t.project1Ach3}</li>
                            <li key="ach4" className="pl-2">{t.project1Ach4}</li>
                            <li key="ach5" className="pl-2">{t.project1Ach5}</li>
                            <li key="ach6" className="pl-2">{t.project1Ach6}</li>
                        </>
                    ) : project.id === 2 ? (
                        <>
                            <li key="ach1" className="pl-2">{t.project2Ach1}</li>
                            <li key="ach2" className="pl-2">{t.project2Ach2}</li>
                            <li key="ach3" className="pl-2">{t.project2Ach3}</li>
                            <li key="ach4" className="pl-2">{t.project2Ach4}</li>
                        </>
                    ) : (
                        <>
                            <li key="ach1" className="pl-2">{t.project3Ach1}</li>
                            <li key="ach2" className="pl-2">{t.project3Ach2}</li>
                            <li key="ach3" className="pl-2">{t.project3Ach3}</li>
                        </>
                    )}
                </ul>
            </div>

        </div>
      </div>
       {/* CSS untuk animasi */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out {
          animation: scaleOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;