import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Hero } from './components/Hero';
import { DistanceSection } from './components/DistanceSection';
import { MemoryGallery } from './components/MemoryGallery';
import { BirthdayLetter } from './components/BirthdayLetter';
import { CuteInteractions } from './components/CuteInteractions';
import { GiftBox } from './components/GiftBox';
import { NightSky } from './components/NightSky';
import { MusicPlayer } from './components/MusicPlayer';
import { FinalMessage } from './components/FinalMessage';
import { HeartParticles } from './components/HeartParticles';
import { audioEngine } from './utils/audioHelper';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [particleTrigger, setParticleTrigger] = useState(0);
  const [particleType, setParticleType] = useState('heart');
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleOpenApp = () => {
    audioEngine.playPopSound();
    audioEngine.startBackgroundMusic();
    setAutoPlayMusic(true);
    setParticleType('heart');
    setParticleTrigger((prev) => prev + 1);
    setShowWelcome(false);
  };

  const triggerHearts = (type = 'heart') => {
    setParticleType(type);
    setParticleTrigger((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white selection:bg-[#B91C3C] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Floating Heart Particles Overlay */}
      <HeartParticles triggerCount={particleTrigger} type={particleType} />

      {/* Welcome Screen Overlay */}
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onOpen={handleOpenApp} />}
      </AnimatePresence>

      {/* Main Website Content */}
      <main className="relative w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. LDR Distance Section */}
        <DistanceSection />

        {/* 3. Memory Gallery */}
        <MemoryGallery />

        {/* 4. Birthday Letter */}
        <BirthdayLetter onTriggerHearts={triggerHearts} />

        {/* 5. Cute Interactions */}
        <CuteInteractions onTriggerHearts={triggerHearts} />

        {/* 6. Virtual Birthday Gift */}
        <GiftBox onTriggerHearts={triggerHearts} />

        {/* 7. Night / LDR Sky Section */}
        <NightSky />

        {/* 8. Final Message & Closing */}
        <FinalMessage onTriggerHearts={triggerHearts} />
      </main>

      {/* Floating Music Player */}
      <MusicPlayer autoPlayOnOpen={autoPlayMusic} />
    </div>
  );
}

export default App;
