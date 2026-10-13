import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX, Heart, ChevronUp, ChevronDown } from 'lucide-react';
import { audioEngine } from '../utils/audioHelper';

export const MusicPlayer = ({ autoPlayOnOpen = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (autoPlayOnOpen && !isPlaying) {
      audioEngine.startBackgroundMusic();
      setIsPlaying(true);
    }
  }, [autoPlayOnOpen]);

  // Sync actual audio progress
  useEffect(() => {
    const timer = setInterval(() => {
      if (audioEngine.audioElement) {
        setCurrentTime(audioEngine.getCurrentTime());
        setDuration(audioEngine.getDuration());
        setIsPlaying(!audioEngine.audioElement.paused);
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    if (isNaN(secs) || secs === 0) return '00:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioEngine.stopBackgroundMusic();
      setIsPlaying(false);
    } else {
      audioEngine.startBackgroundMusic();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioEngine.seek(newTime);
    setCurrentTime(newTime);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#1A1A1A]/95 backdrop-blur-xl border border-[#E63956]/40 rounded-2xl shadow-[0_0_35px_rgba(185,28,60,0.35)] p-3 flex flex-col text-white transition-all overflow-hidden max-w-xs sm:max-w-sm"
      >
        {/* Compact Bar Always Visible */}
        <div className="flex items-center gap-3">
          {/* Animated Music Disk Icon */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#B91C3C] to-[#E63956] p-0.5 flex items-center justify-center cursor-pointer shrink-0"
          >
            <div className={`w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
              <Music className="w-5 h-5 text-[#E63956]" />
            </div>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0D0D0D] animate-ping" />
            )}
          </button>

          {/* Song Info */}
          <div className="flex flex-col cursor-pointer flex-1 min-w-0" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white truncate">
                {audioEngine.songTitle}
              </span>
              <Heart className="w-3 h-3 text-[#E63956] fill-[#E63956] shrink-0" />
            </div>
            <span className="text-[10px] text-rose-300 truncate">
              {audioEngine.artist}
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-[#E63956] hover:bg-[#B91C3C] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-md"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>

          {/* Toggle Expand Details */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white p-1 cursor-pointer shrink-0"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Controls & Progress Bar */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2"
            >
              {/* Interactive Seek Bar */}
              <div className="relative flex items-center w-full">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-[#0D0D0D] rounded-full appearance-none cursor-pointer accent-[#E63956]"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                <button
                  onClick={toggleMute}
                  className="flex items-center gap-1 text-rose-300 hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{isMuted ? 'Muted' : 'Volume ON'}</span>
                </button>
                <span>{formatTime(duration)}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
