// Romantic Audio Engine supporting HTML5 Audio Track & Web Audio API SFX

class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.audioElement = null;
    this.isPlayingMusic = false;
    this.isMuted = false;
    this.volume = 0.6;
    this.masterGain = null;

    // Track details
    this.songTitle = "Seize the Day";
    this.artist = "Avenged Sevenfold";
    this.musicSrc = "/music.mp3";

    if (typeof window !== 'undefined') {
      this.audioElement = new Audio(this.musicSrc);
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;
    }
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = val;
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  startBackgroundMusic() {
    this.initContext();
    if (this.audioElement) {
      this.audioElement.play().then(() => {
        this.isPlayingMusic = true;
      }).catch((err) => {
        console.warn("Autoplay audio blocked or error:", err);
      });
    }
  }

  stopBackgroundMusic() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.isPlayingMusic = false;
    }
  }

  getCurrentTime() {
    return this.audioElement ? this.audioElement.currentTime : 0;
  }

  getDuration() {
    return this.audioElement && !isNaN(this.audioElement.duration) ? this.audioElement.duration : 0;
  }

  seek(seconds) {
    if (this.audioElement) {
      this.audioElement.currentTime = seconds;
    }
  }

  // Web Audio API Sound Effects (SFX)
  playNote(freq, type = 'sine', duration = 1.2, delay = 0, gainVal = 0.15) {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      
      noteGain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
      noteGain.gain.linearRampToValueAtTime(gainVal, this.ctx.currentTime + delay + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);
      
      osc.connect(noteGain);
      noteGain.connect(this.masterGain);
      
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      console.warn("Audio note error", e);
    }
  }

  playPopSound() {
    this.playNote(587.33, 'sine', 0.2, 0, 0.2);
    this.playNote(880.00, 'sine', 0.25, 0.08, 0.25);
  }

  playKissSound() {
    this.playNote(783.99, 'sine', 0.15, 0, 0.3);
    this.playNote(1046.50, 'triangle', 0.3, 0.06, 0.25);
  }

  playHugSound() {
    [329.63, 392.00, 523.25, 659.25].forEach((f, i) => {
      this.playNote(f, 'sine', 0.6, i * 0.1, 0.15);
    });
  }

  playUnwrapSound() {
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((f, i) => {
      this.playNote(f, 'triangle', 0.5, i * 0.07, 0.2);
    });
  }
}

export const audioEngine = new RomanticAudioEngine();
