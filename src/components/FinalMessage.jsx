import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioHelper';

export const FinalMessage = ({ onTriggerHearts }) => {
  const [hugSent, setHugSent] = useState(false);

  const handleSendHug = () => {
    audioEngine.playHugSound();
    setHugSent(true);
    if (onTriggerHearts) onTriggerHearts('hug');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#B91C3C', '#E63956', '#FFFFFF']
      });
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <section className="relative py-28 px-4 bg-[#0D0D0D] overflow-hidden text-center">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B91C3C]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Heart Icon Badge */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#B91C3C] to-[#E63956] p-1 mb-8 shadow-2xl shadow-[#B91C3C]/50 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-[#E63956] fill-[#E63956]" />
          </div>
        </motion.div>

        {/* Closing Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Happy Birthday, <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E63956] to-[#B91C3C]">
            My Favorite Person ❤️
          </span>
        </motion.h2>

        {/* Closing Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto space-y-3 text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-12"
        >
          <p>“Terima kasih sudah bertahan sejauh ini bersamaku.</p>
          <p className="text-white font-medium">
            Semoga jarak ini hanya menjadi bagian kecil dari cerita kita, bukan akhir dari perjalanan kita.”
          </p>
        </motion.div>

        {/* Send Hug Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(230, 57, 86, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendHug}
            className="px-10 py-4 sm:py-5 bg-gradient-to-r from-[#B91C3C] to-[#E63956] text-white font-semibold rounded-full shadow-xl shadow-[#B91C3C]/50 flex items-center gap-3 text-lg sm:text-xl cursor-pointer"
          >
            <span>Kirim Peluk dari Jauh 🤗</span>
            <Sparkles className="w-5 h-5" />
          </motion.button>

          {/* Toast Message when Hug Sent */}
          <AnimatePresence>
            {hugSent && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 px-6 py-3 rounded-full bg-[#1A1A1A] border border-[#E63956] text-[#E63956] text-base font-semibold shadow-lg flex items-center gap-2"
              >
                <Heart className="w-5 h-5 fill-[#E63956]" />
                <span>Peluknya sudah sampai. ❤️</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer info */}
        <footer className="mt-24 pt-8 border-t border-white/5 w-full text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Dibuat dengan segenap cinta & rindu ❤️</span>
          <span>© 2026 Special Birthday Surprise for You</span>
        </footer>
      </div>
    </section>
  );
};
