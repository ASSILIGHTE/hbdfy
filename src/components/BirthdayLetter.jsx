import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audioHelper';

export const BirthdayLetter = ({ onTriggerHearts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      audioEngine.playUnwrapSound();
      if (onTriggerHearts) onTriggerHearts('heart');
    }
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative py-24 px-4 bg-[#0D0D0D] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#B91C3C]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#E63956]/30 text-rose-300 text-xs sm:text-sm font-medium mb-4"
        >
          <Mail className="w-4 h-4 text-[#E63956]" />
          <span>Surat Spesial</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8"
        >
          Ada sedikit sesuatu untuk kamu... 💌
        </motion.h2>

        {/* Envelope / Letter Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto bg-[#1A1A1A]/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#E63956]/30 shadow-[0_0_50px_rgba(185,28,60,0.2)] text-left flex flex-col items-center"
        >
          {!isOpen ? (
            /* Envelope Sealed View */
            <div className="flex flex-col items-center text-center py-6">
              <motion.div
                animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#B91C3C] to-[#E63956] p-1 mb-6 shadow-xl shadow-[#B91C3C]/40 flex items-center justify-center cursor-pointer group"
                onClick={handleToggle}
              >
                <div className="w-full h-full bg-[#0D0D0D] rounded-2xl flex items-center justify-center group-hover:scale-95 transition-transform">
                  <Mail className="w-12 h-12 text-[#E63956]" />
                </div>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                Surat Ulang Tahun Rahasia
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-8 max-w-md">
                Sebuah pesan hangat dari lubuk hati yang paling dalam, khusus ditulis untukmu di hari istimewa ini.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(230, 57, 86, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleToggle}
                className="px-8 py-3.5 bg-gradient-to-r from-[#B91C3C] to-[#E63956] text-white font-medium rounded-full shadow-lg shadow-[#B91C3C]/40 flex items-center gap-2 cursor-pointer text-base"
              >
                <span>Buka Surat 💌</span>
              </motion.button>
            </div>
          ) : (
            /* Opened Letter Content */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Header inside letter */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B91C3C]/30 border border-[#E63956]/40 flex items-center justify-center text-[#E63956]">
                    <Heart className="w-5 h-5 fill-[#E63956]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Surat Cinta Untukmu</h4>
                    <span className="text-xs text-rose-300">Spesial Hari Ulang Tahun</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Tutup Surat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Exact Letter Body */}
              <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-light font-sans-custom tracking-wide">
                <p>
                  Selamat ulang tahun untuk seseorang yang sangat berarti buatku.
                </p>
                <p>
                  Hari ini mungkin kita tidak bisa merayakannya bersama secara langsung, tidak bisa duduk bersebelahan, atau sekadar mengucapkan selamat sambil melihat senyummu dari dekat.
                </p>
                <p>
                  Tapi aku ingin kamu tahu, jarak tidak pernah membuat rasa sayang ini ikut menjauh.
                </p>
                <p>
                  Semoga di usia yang baru ini kamu selalu diberikan kesehatan, kebahagiaan, dan banyak hal baik. Semoga semua yang kamu impikan bisa tercapai satu per satu.
                </p>
                <p className="font-normal text-white">
                  Dan semoga suatu hari nanti, kita tidak lagi merayakan ulang tahun dari balik layar, tapi benar-benar duduk berdampingan dan membuat banyak kenangan baru bersama. ❤️
                </p>
              </div>

              {/* Footer sign off */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-script text-2xl text-rose-400">Dengan Seluruh Cintaku</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-gray-400 hover:text-rose-300 underline cursor-pointer"
                >
                  Lipat Surat Kembali
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
