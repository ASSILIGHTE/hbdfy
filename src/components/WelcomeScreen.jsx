import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';

export const WelcomeScreen = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] text-white px-6 overflow-hidden"
    >
      {/* Background Subtle Red Glow & Floating Ambient Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#B91C3C]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Floating background hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute text-[#E63956]"
          >
            <Heart className="w-5 h-5 sm:w-7 sm:h-7 fill-[#E63956]" />
          </motion.div>
        ))}
      </div>

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-lg w-full bg-[#1A1A1A]/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#E63956]/20 shadow-[0_0_50px_rgba(185,28,60,0.25)] text-center flex flex-col items-center"
      >
        {/* Heart Icon Badge */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#B91C3C] to-[#E63956] p-[2px] mb-6 shadow-lg shadow-[#B91C3C]/40"
        >
          <div className="w-full h-full bg-[#0D0D0D] rounded-2xl flex items-center justify-center">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#E63956] fill-[#E63956]" />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
          Untuk seseorang yang <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63956] to-[#FF6B8B]">
            jauh di sana... ❤️
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
          “Walaupun jarak memisahkan, hari ini tetap ingin aku rayakan bersamamu.”
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(230, 57, 86, 0.6)" }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="group relative px-8 py-4 bg-gradient-to-r from-[#B91C3C] to-[#E63956] text-white font-semibold rounded-full shadow-lg shadow-[#B91C3C]/40 transition-all flex items-center gap-3 text-base sm:text-lg cursor-pointer"
        >
          <span>Buka Hadiah ❤️</span>
          <Sparkles className="w-5 h-5 text-white/80 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
