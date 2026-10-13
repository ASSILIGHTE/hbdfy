import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Compass, ShieldCheck } from 'lucide-react';

export const DistanceSection = () => {
  const [city1, setCity1] = useState('Lokasimu');
  const [city2, setCity2] = useState('Lokasiku');

  return (
    <section className="relative py-20 px-4 bg-[#0D0D0D] border-y border-white/5 overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B91C3C]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#E63956]/30 text-rose-300 text-xs sm:text-sm font-medium mb-8 shadow-md"
        >
          <ShieldCheck className="w-4 h-4 text-[#E63956]" />
          <span>Distance can't stop us ❤️</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Walaupun Jauh, <span className="text-[#E63956]">Tetap Dekat</span>
        </motion.h2>

        {/* Distance Interactive Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto my-8 bg-[#1A1A1A]/70 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#E63956]/20 shadow-[0_0_40px_rgba(185,28,60,0.15)] flex flex-col items-center"
        >
          {/* Top connection visual */}
          <div className="w-full flex items-center justify-between gap-4 mb-8 sm:mb-12">
            {/* Location 1: Kamu */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0D0D0D] border border-[#E63956]/40 flex flex-col items-center justify-center shadow-lg shadow-[#B91C3C]/20 group hover:border-[#E63956] transition-colors">
                <MapPin className="w-8 h-8 text-[#E63956] animate-bounce" />
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 font-semibold text-white text-base sm:text-lg">
                  <span>📍 aku</span>
                  <Heart className="w-4 h-4 text-[#E63956] fill-[#E63956]" />
                </div>
                <span className="text-xs text-gray-400">Di Sana</span>
              </div>
            </div>

            {/* Connecting Line & Heart pulse animation */}
            <div className="flex-1 relative flex flex-col items-center justify-center px-2">
              <div className="w-full h-1 bg-gradient-to-r from-[#B91C3C] via-[#E63956] to-[#B91C3C] rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 w-1/3 animate-[slideRight_2.5s_infinite_linear]" />
              </div>
              <div className="my-2 px-3 py-1 bg-[#0D0D0D] border border-white/10 rounded-full text-[11px] sm:text-xs text-gray-300 flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5 text-[#E63956] animate-spin" style={{ animationDuration: '10s' }} />
                <span>Ratusan Kilometer</span>
              </div>
            </div>

            {/* Location 2: Aku */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0D0D0D] border border-[#E63956]/40 flex flex-col items-center justify-center shadow-lg shadow-[#B91C3C]/20 group hover:border-[#E63956] transition-colors">
                <MapPin className="w-8 h-8 text-[#E63956] animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 font-semibold text-white text-base sm:text-lg">
                  <Heart className="w-4 h-4 text-[#E63956] fill-[#E63956]" />
                  <span>📍 kamu</span>
                </div>
                <span className="text-xs text-gray-400">Di Sini</span>
              </div>
            </div>
          </div>

          {/* Main Statement Quote */}
          <blockquote className="text-lg sm:text-2xl text-gray-200 font-light leading-relaxed max-w-xl italic">
            “Kita mungkin tidak berada di tempat yang sama, tapi kamu selalu punya tempat yang sama di hatiku.”
          </blockquote>
        </motion.div>
      </div>

      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};
