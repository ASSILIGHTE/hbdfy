import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles, X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioHelper';

export const GiftBox = ({ onTriggerHearts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (!isOpen) {
      audioEngine.playUnwrapSound();
      if (onTriggerHearts) onTriggerHearts('heart');

      // Trigger Confetti Explosion!
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#B91C3C', '#E63956', '#FFFFFF', '#FFD1DC']
        });
      } catch (e) {
        console.warn(e);
      }
    }
    setIsOpen(true);
  };

  return (
    <section className="relative py-24 px-4 bg-[#0D0D0D] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B91C3C]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#E63956]/30 text-rose-300 text-xs sm:text-sm font-medium mb-4"
        >
          <Gift className="w-4 h-4 text-[#E63956]" />
          <span>Virtual Birthday Gift</span>
        </motion.div>

        {/* Header Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8"
        >
          Aku punya satu <span className="text-[#E63956]">hadiah lagi... 🎁</span>
        </motion.h2>

        {/* Gift Box Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-xl mx-auto bg-[#1A1A1A]/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#E63956]/30 shadow-[0_0_50px_rgba(185,28,60,0.25)] flex flex-col items-center"
        >
          {!isOpen ? (
            /* Unopened Gift State */
            <div className="flex flex-col items-center py-4">
              {/* Interactive Animated Gift Box Graphic */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenGift}
                className="relative w-36 h-36 sm:w-44 sm:h-44 mb-8 cursor-pointer group flex items-center justify-center"
              >
                {/* Glow around box */}
                <div className="absolute inset-0 bg-[#E63956]/30 rounded-3xl blur-xl group-hover:bg-[#E63956]/50 transition-colors" />

                {/* Gift Box Illustration */}
                <div className="relative w-full h-full bg-gradient-to-tr from-[#B91C3C] to-[#E63956] rounded-3xl p-1 shadow-2xl flex flex-col items-center justify-center border border-white/20">
                  <div className="w-full h-full bg-[#1A1A1A] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Ribbon Vertical */}
                    <div className="absolute inset-y-0 w-8 bg-gradient-to-b from-[#B91C3C] via-[#E63956] to-[#B91C3C]" />
                    {/* Ribbon Horizontal */}
                    <div className="absolute inset-x-0 h-8 bg-gradient-to-r from-[#B91C3C] via-[#E63956] to-[#B91C3C]" />
                    
                    {/* Heart Center Badge */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-[#0D0D0D] border-2 border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Gift className="w-7 h-7 text-[#E63956]" />
                    </div>
                  </div>
                </div>

                <Sparkles className="absolute -top-3 -right-3 text-yellow-300 w-8 h-8 animate-bounce" />
              </motion.div>

              <p className="text-gray-300 text-sm sm:text-base mb-6 font-medium">
                Klik kado di atas untuk membuka kejutan istimewa! ✨
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(230,57,86,0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenGift}
                className="px-8 py-3.5 bg-gradient-to-r from-[#B91C3C] to-[#E63956] text-white font-medium rounded-full shadow-lg shadow-[#B91C3C]/40 flex items-center gap-2 cursor-pointer text-base"
              >
                <span>Buka Hadiah 🎁</span>
              </motion.button>
            </div>
          ) : (
            /* Opened Gift Card View */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* Floating opened heart icon */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#B91C3C] to-[#E63956] p-1 mb-6 shadow-xl shadow-[#E63956]/40 flex items-center justify-center"
              >
                <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-[#E63956] fill-[#E63956]" />
                </div>
              </motion.div>

              <div className="p-6 rounded-2xl bg-[#0D0D0D]/70 border border-[#E63956]/30 mb-6 shadow-inner">
                {/* Exact Specified Gift Message */}
                <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-light mb-4">
                  “Hadiah sebenarnya bukan sesuatu yang bisa dibungkus.
                </p>
                <p className="text-white text-lg sm:text-xl font-semibold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E63956] to-[#FF6B8B]">
                  Hadiah sebenarnya adalah harapan supaya kita bisa terus bersama, sejauh apa pun jaraknya. ❤️”
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-gray-400 hover:text-rose-300 underline cursor-pointer"
              >
                Tutup Pembungkus Hadiah
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
