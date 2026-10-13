import React, { useState, useEffect } from 'react';

export const HeartParticles = ({ triggerCount, type = 'heart' }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (triggerCount === 0) return;

    const symbols = type === 'kiss' 
      ? ['💋', '❤️', '😘', '💖', '✨'] 
      : type === 'hug' 
      ? ['🤗', '❤️', '🫂', '💕', '✨'] 
      : ['❤️', '💖', '💗', '💕', '🌹', '✨'];

    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 90 + 5, // percentage
      size: Math.random() * 24 + 18, // px
      duration: Math.random() * 2.5 + 2, // seconds
      delay: Math.random() * 0.4, // seconds
      rotate: Math.random() * 60 - 30, // deg
      drift: Math.random() * 100 - 50, // horizontal drift px
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    const timer = setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 4500);

    return () => clearTimeout(timer);
  }, [triggerCount, type]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 text-red-500 animate-float-heart drop-shadow-[0_0_10px_rgba(230,57,86,0.8)]"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animation: `floatUp ${p.duration}s cubic-bezier(0.25, 1, 0.5, 1) ${p.delay}s forwards`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          {p.symbol}
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.6) rotate(0deg);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-50vh) scale(1.2) rotate(15deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-105vh) scale(0.8) rotate(-15deg);
          }
        }
      `}</style>
    </div>
  );
};
