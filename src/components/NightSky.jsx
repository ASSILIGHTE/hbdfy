import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Star, Sparkles, Heart } from 'lucide-react';
import { audioEngine } from '../utils/audioHelper';

export const NightSky = () => {
  const [clickedWish, setClickedWish] = useState(null);

  const starWishes = [
    "Semoga kita segera dipersatukan dalam ikatan halal & bahagia selamanya. 💍",
    "Semoga kamu selalu sehat, dilindungi, dan bahagia di mana pun berada. ✨",
    "Semoga setiap langkah dan impianmu dimudahkan oleh Tuhan. 🤲",
    "Semoga rasa rindu ini selalu berbuah manis saat kita bertemu nanti. ❤️",
    "Semoga senyum indahmu tidak pernah pudar oleh apa pun. 😊",
    "Semoga jarak ini membuat cinta kita semakin kuat dan dewasa. 🌙"
  ];

  const handleStarClick = (idx) => {
    audioEngine.playPopSound();
    setClickedWish(starWishes[idx % starWishes.length]);
  };

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#0D0D0D] via-[#08080C] to-[#0D0D0D] border-y border-white/5 overflow-hidden">
      {/* Night Sky Stars Canvas / Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Moon Glow Container */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Glowing Moon Illustration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-slate-200 via-amber-100 to-white shadow-[0_0_50px_rgba(254,243,199,0.5)] flex items-center justify-center p-1">
            <div className="w-full h-full bg-[#0D0D0D]/20 backdrop-blur-sm rounded-full flex items-center justify-center relative overflow-hidden">
              <Moon className="w-14 h-14 text-amber-100 fill-amber-100 drop-shadow-[0_0_15px_rgba(254,243,199,0.8)]" />
            </div>
          </div>
          {/* Subtle star ring */}
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-200 animate-pulse" />
          <Star className="absolute -bottom-1 -left-2 w-5 h-5 text-amber-100 animate-twinkle" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Lihat Bulan Malam Ini 🌙
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-base sm:text-xl max-w-2xl leading-relaxed font-light mb-12 px-2"
        >
          “Mungkin kita melihat bulan yang sama dari tempat yang berbeda. Jadi, kalau kamu sedang merindukanku, lihat ke atas. Anggap saja kita sedang menatap langit yang sama. 🌙”
        </motion.p>

        {/* Interactive Stargazing Wishes */}
        <div className="w-full max-w-lg bg-[#1A1A1A]/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center">
          <span className="text-xs text-rose-300 font-medium mb-3 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Klik Bintang di Bawah Untuk Membuat Harapan</span>
          </span>

          <div className="flex items-center justify-center gap-4 py-2">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.25, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleStarClick(idx)}
                className="p-2 text-amber-200 hover:text-amber-300 transition-colors cursor-pointer"
                title="Klik Bintang Harapan"
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-amber-200/30 hover:fill-amber-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.6)]" />
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {clickedWish && (
              <motion.div
                key={clickedWish}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3.5 rounded-xl bg-[#0D0D0D] border border-amber-300/30 text-amber-100 text-xs sm:text-sm font-medium text-center"
              >
                <p>✨ “{clickedWish}”</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
