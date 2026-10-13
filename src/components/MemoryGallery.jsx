import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ZoomIn, Calendar } from 'lucide-react';

export const MemoryGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const memories = [
    {
      id: 1,
      caption: "senyummu,matamu,semua tentangmu adalah favoritku. happy birthday my warmness on the soul.",
      date: "",
      color: "from-rose-900/60 to-red-950/80",
      image: "/photos/1.jpeg"
    },
    {
      id: 2,
      caption: "don\'t know why, but the first time we met, my heart would race whenever I was near you. I\’m happy getting to know you better; even though we\’re both introverts, we\’re able to understand each other well enough to take the initiative and start a conversation.-19 mei 2026🤍",
      date: "",
      color: "from-[#B91C3C]/60 to-[#0D0D0D]/90",
      image: "/photos/2.jpeg"
    },
    {
      id: 3,
      caption: "I really loved driving around BSB and Kaliwungu with you\; just doing that makes me incredibly happy—I don\'t need fancy places, as long as I\'m with you. I also loved having you keep me company at Mama\'s shop during the afternoon\; it makes me so happy whenever you have time for me... -11agustus 2026🤍",
      date: "",
      color: "from-[#E63956]/40 to-[#1A1A1A]/90",
      image: "/photos/3.jpeg"
    },
    {
      id: 4,
      caption: "this was also at the same place—we even managed to laugh, albeit briefly, after wandering around back then...-11agustus 2026",
      date: "",
      color: "from-pink-900/50 to-rose-950/90",
      image: "/photos/4.jpeg"
    },
    {
      id: 5,
      caption: "I hope your new year of life is always filled with happiness. Please don't wear yourself out so easily, and don't bottle everything up inside when the people who love you are right here, ready to listen to your stories or problems whenever you need—never think you're alone, okay? 😙🤍",
      date: "",
      color: "from-red-900/50 to-[#0D0D0D]/90",
      image: "/photos/5.jpeg"
    },
    {
      id: 6,
      caption: "Thank you for staying so strong all these 24 years. Whatever obstacles come your way, I know you can get through them. Never lose your spirit, my darling, my love. ❤️-10 Oktober 2026",
      date: "",
      color: "from-rose-950/70 to-red-900/60",
      image: "/photos/6.jpeg"
    },
    {
      id: 7,
      caption: "I hope we’ll always be together, from this year onwards and forever—I love you, my darling, my love ☹️🫶❤️- from cwekkk bocil mu",
      date: "",
      color: "from-[#B91C3C]/50 to-[#1A1A1A]/90",
      image: "/photos/7.jpeg"
    },
    {
      id: 8,
      caption: "I know you're exhausted after work—and with the issues we've been having, you must be absolutely drained, especially since I keep picking fights. I’m sorry about that. Please, never leave me over something trivial. The truth is, when we aren't fighting, I feel so happy, my love—and meeting up makes that happiness double; I imagine you feel the same way too. 🤍",
      date: "",
      color: "from-[#E63956]/50 to-red-950/80",
      image: "/photos/8.jpeg"
    }
  ];

  // Helper render for SVG illustrations inside photo cards
  const renderIllustration = (type) => {
    switch (type) {
      case 'smile':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#B91C3C]/30 via-[#1A1A1A] to-[#0D0D0D]">
            <div className="relative">
              <span className="text-6xl sm:text-7xl drop-shadow-[0_0_20px_rgba(230,57,86,0.5)] animate-float">👩🏻‍❤️‍👨🏻</span>
              <Sparkles className="absolute -top-2 -right-2 text-yellow-300 w-6 h-6 animate-pulse" />
            </div>
          </div>
        );
      case 'sunset':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-amber-950/60 via-[#B91C3C]/40 to-[#0D0D0D]">
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-amber-400 to-[#E63956] blur-sm opacity-80" />
              <span className="absolute text-5xl">🌅</span>
            </div>
          </div>
        );
      case 'videocall':
        return (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#1A1A1A] to-[#B91C3C]/40">
            <div className="relative p-4 rounded-2xl bg-[#0D0D0D]/80 border border-[#E63956]/40 flex items-center gap-3">
              <span className="text-4xl">📱</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-rose-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Call 02:45:10</span>
                </div>
                <span className="text-sm font-semibold text-white">Video Call Romantis ❤️</span>
              </div>
            </div>
          </div>
        );
      case 'holdinghands':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-rose-950/50 via-[#1A1A1A] to-[#0D0D0D]">
            <span className="text-6xl drop-shadow-md animate-heart-beat">👩‍❤️‍💋‍👨</span>
          </div>
        );
      case 'coffee':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2A1116] via-[#1A1A1A] to-[#0D0D0D]">
            <span className="text-6xl mb-2">☕</span>
            <div className="flex items-center gap-1 text-xs text-rose-300">
              <Heart className="w-3.5 h-3.5 fill-[#E63956] text-[#E63956]" />
              <span>Kencan Virtual</span>
            </div>
          </div>
        );
      case 'stargazing':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-[#1A1A1A] to-[#B91C3C]/30">
            <span className="text-6xl mb-1">🌙</span>
            <span className="text-xs text-amber-200/80 font-light">Menatap Bintang Yang Sama</span>
          </div>
        );
      case 'letter':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-rose-950/60 via-[#1A1A1A] to-[#0D0D0D]">
            <span className="text-6xl drop-shadow-lg">💌</span>
          </div>
        );
      case 'birthday':
      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#B91C3C]/50 via-[#1A1A1A] to-[#E63956]/30">
            <span className="text-6xl mb-2 animate-bounce">🎂</span>
            <div className="flex items-center gap-1 text-xs text-yellow-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Birthday</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#0D0D0D] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#B91C3C]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#E63956]/30 text-[#E63956] text-xs font-medium mb-4"
          >
            <Heart className="w-3.5 h-3.5 fill-[#E63956]" />
            <span>Memory Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Galeri Kenangan <span className="text-[#E63956]">KITA ❤️</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Setiap detik yang telah kita lewati punya cerita manis tersendiri.
          </motion.p>
        </div>

        {/* Gallery Grid (Responsive 2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {memories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(230,57,86,0.3)] hover:border-[#E63956]/50 transition-all duration-300 flex flex-col"
            >
              {/* Image / Illustration Container */}
              <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-[#0D0D0D]">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#E63956] text-white flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#0D0D0D]/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs text-rose-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#E63956]" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#1A1A1A] border-t border-white/5 flex-1 flex flex-col justify-between">
                <p className="text-gray-200 text-xs sm:text-sm font-medium leading-snug line-clamp-2 group-hover:text-rose-300 transition-colors">
                  “{item.caption}”
                </p>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                  <span>Klik untuk lihat</span>
                  <Heart className="w-3 h-3 text-[#E63956] opacity-0 group-hover:opacity-100 transition-opacity fill-[#E63956]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-xl p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#1A1A1A] border border-[#E63956]/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(230,57,86,0.4)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0D0D0D]/80 border border-white/10 text-white flex items-center justify-center hover:bg-[#E63956] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-64 sm:h-72">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 text-center bg-[#1A1A1A]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B91C3C]/20 text-[#E63956] text-xs mb-3 font-medium">
                  <Heart className="w-3.5 h-3.5 fill-[#E63956]" />
                  <span>{selectedPhoto.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-relaxed mb-4">
                  “{selectedPhoto.caption}”
                </h3>
                <p className="text-xs text-gray-400 italic">
                  Kenangan indah ini akan selalu tersimpan manis dalam ingatan. ❤️
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
