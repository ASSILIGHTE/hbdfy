import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Moon, Star, MapPin, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[#0D0D0D]">
      {/* Background Soft Glow & Stars */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B91C3C]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Star className="absolute top-12 left-[10%] w-4 h-4 text-amber-200/40 animate-twinkle" />
        <Star className="absolute top-28 right-[15%] w-5 h-5 text-amber-200/50 animate-twinkle" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-20 left-[20%] w-3 h-3 text-[#E63956]/40 animate-twinkle" style={{ animationDelay: '2s' }} />
        <Moon className="absolute top-16 right-[8%] w-10 h-10 text-slate-200/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-float-slow" />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Animated Cute LDR Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg h-44 sm:h-52 mb-8 bg-[#1A1A1A]/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex items-center justify-between shadow-2xl overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#E63956_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

          {/* Left Side: Avatar/Heart 1 (Kamu) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 relative z-10"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-[#B91C3C] to-[#0D0D0D] p-1 shadow-lg shadow-[#B91C3C]/30 flex items-center justify-center">
              <div className="w-full h-full bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                <span className="text-2xl sm:text-3xl">👧🏻</span>
                <div className="absolute bottom-1 right-1 bg-[#E63956] text-white text-[10px] p-0.5 rounded-full">
                  <Heart className="w-2.5 h-2.5 fill-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-[#0D0D0D]/80 px-3 py-1 rounded-full border border-white/10 text-xs text-rose-300 font-medium">
              <MapPin className="w-3 h-3 text-[#E63956]" />
              <span>📍 aku</span>
            </div>
          </motion.div>

          {/* Connection Line with Traveling Pulse */}
          <div className="flex-1 mx-4 relative flex items-center justify-center h-full">
            <svg className="w-full h-12 overflow-visible">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B91C3C" />
                  <stop offset="50%" stopColor="#E63956" />
                  <stop offset="100%" stopColor="#B91C3C" />
                </linearGradient>
              </defs>
              <path
                d="M 0 24 Q 75 0, 150 24 T 300 24"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="stroke-dashed opacity-70"
              />
            </svg>

            {/* Floating Traveling Heart Signal */}
            <motion.div
              animate={{ 
                x: ['-120%', '120%'],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute text-[#E63956] drop-shadow-[0_0_10px_#E63956]"
            >
              <Heart className="w-5 h-5 fill-[#E63956] animate-pulse" />
            </motion.div>
          </div>

          {/* Right Side: Avatar/Heart 2 (Aku) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="flex flex-col items-center gap-2 relative z-10"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-[#B91C3C] to-[#0D0D0D] p-1 shadow-lg shadow-[#B91C3C]/30 flex items-center justify-center">
              <div className="w-full h-full bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                <span className="text-2xl sm:text-3xl">👦🏻</span>
                <div className="absolute bottom-1 right-1 bg-[#E63956] text-white text-[10px] p-0.5 rounded-full">
                  <Heart className="w-2.5 h-2.5 fill-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-[#0D0D0D]/80 px-3 py-1 rounded-full border border-white/10 text-xs text-rose-300 font-medium">
              <MapPin className="w-3 h-3 text-[#E63956]" />
              <span>📍 kamu</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B91C3C]/20 border border-[#E63956]/40 text-[#E63956] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Halaman Spesial Hari Ulang Tahun</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Happy Birthday, <br className="sm:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E63956] to-[#B91C3C]">
            Sayang ❤️
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-300 text-base sm:text-xl max-w-2xl leading-relaxed font-light mb-10 px-2"
        >
          “dear good,hold him when I'm not around happy birthday ke 24 kamu,semoga tuhan jagain kamu disetiap jalan yg aku ga bisa temenin.”
        </motion.p>
      </div>
    </section>
  );
};
