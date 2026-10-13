import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Smile, RefreshCw } from 'lucide-react';
import { audioEngine } from '../utils/audioHelper';

export const CuteInteractions = ({ onTriggerHearts }) => {
  const [activeMessage, setActiveMessage] = useState(null);
  const [hugging, setHugging] = useState(false);

  const cuteQuotes = [
    "Aku bangga banget sama semua kerja kerasmu! ❤️",
    "Jangan lupa senyum ya hari ini, karena senyummu itu candu! ✨",
    "Jarak ini cuma sementara, rasa sayangku ini yang selamanya. 🌹",
    "Kamu itu alasan aku selalu bersemangat setiap hari! 🥰",
    "Semoga hari ulang tahunmu seindah caramu membahagiakanku. 🎂",
    "Kalau rindu, pejamkan mata... bayangkan aku sedang memelukmu erat! 🤗",
    "Kamu adalah rumah tempat hatiku selalu ingin pulang. 🏠❤️"
  ];

  const handleKangen = () => {
    audioEngine.playPopSound();
    if (onTriggerHearts) onTriggerHearts('heart');
    setActiveMessage("Rasa kangennya sudah terkirim menembus jarak! ❤️");
  };

  const handlePeluk = () => {
    audioEngine.playHugSound();
    setHugging(true);
    if (onTriggerHearts) onTriggerHearts('hug');
    setActiveMessage("Pelukan hangat dari jauh sedang mendekapmu erat-erat! 🤗");
    setTimeout(() => setHugging(false), 3000);
  };

  const handleCium = () => {
    audioEngine.playKissSound();
    if (onTriggerHearts) onTriggerHearts('kiss');
    setActiveMessage("Ciuman hangat mendarat di pipimu! 😚💋");
  };

  const handleRandomMessage = () => {
    audioEngine.playPopSound();
    const randomQuote = cuteQuotes[Math.floor(Math.random() * cuteQuotes.length)];
    setActiveMessage(randomQuote);
  };

  return (
    <section className="relative py-20 px-4 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#B91C3C]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#E63956]/30 text-rose-300 text-xs sm:text-sm font-medium mb-4"
        >
          <Smile className="w-4 h-4 text-[#E63956]" />
          <span>Interaksi Lucu</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white mb-4"
        >
          Kirim Rasa Sayang <span className="text-[#E63956]">Spontan</span>
        </motion.h2>

        <p className="text-gray-400 text-xs sm:text-sm mb-10 max-w-md mx-auto">
          Tekan tombol-tombol di bawah ini untuk mengirimkan reaksi cinta langsung ke layar!
        </p>

        {/* Hug Animation Visual Box if hugging */}
        <div className="relative h-24 max-w-sm mx-auto mb-8 bg-[#1A1A1A]/60 rounded-2xl border border-white/10 p-4 flex items-center justify-between overflow-hidden shadow-inner">
          <motion.div
            animate={{ x: hugging ? 100 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl"
          >
            👧🏻
          </motion.div>

          {hugging ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              className="flex flex-col items-center"
            >
              <Heart className="w-8 h-8 text-[#E63956] fill-[#E63956] animate-pulse" />
              <span className="text-[10px] text-rose-300 font-semibold mt-1">Warm Hug!</span>
            </motion.div>
          ) : (
            <span className="text-xs text-gray-500 italic">Jarak</span>
          )}

          <motion.div
            animate={{ x: hugging ? -100 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl"
          >
            👦🏻
          </motion.div>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(230,57,86,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleKangen}
            className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#E63956]/30 hover:border-[#E63956] text-white flex flex-col items-center gap-2 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ❤️
            </div>
            <span className="font-medium text-sm">Kangen</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(230,57,86,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePeluk}
            className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#E63956]/30 hover:border-[#E63956] text-white flex flex-col items-center gap-2 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🤗
            </div>
            <span className="font-medium text-sm">Peluk Jauh</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(230,57,86,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCium}
            className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#E63956]/30 hover:border-[#E63956] text-white flex flex-col items-center gap-2 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              😚
            </div>
            <span className="font-medium text-sm">Cium Jauh</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(230,57,86,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRandomMessage}
            className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#E63956]/30 hover:border-[#E63956] text-white flex flex-col items-center gap-2 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform text-[#E63956]">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="font-medium text-sm">Pesan Manis</span>
          </motion.button>
        </div>

        {/* Dynamic Message Box Popup */}
        <AnimatePresence mode="wait">
          {activeMessage && (
            <motion.div
              key={activeMessage}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="max-w-md mx-auto p-4 rounded-2xl bg-[#B91C3C]/20 border border-[#E63956]/40 text-rose-200 text-sm font-medium shadow-lg backdrop-blur-md flex items-center justify-between gap-3"
            >
              <span>{activeMessage}</span>
              <button
                onClick={() => setActiveMessage(null)}
                className="text-xs text-rose-400 hover:text-white underline cursor-pointer shrink-0"
              >
                Tutup
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
