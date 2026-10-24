import React, { useState, useRef, useEffect } from 'react';
import corePlatform from "../assets/images/candidhr_core_platform.mp4";
import autoNoumous from "../assets/images/candidhr_how_it_works.mp4";
import walkThrough from "../assets/images/candidhr_applicants_walkthrough_1.mp4";
import applicantsWalkthroughAudio from '../audio/applicants_walkthrough_voice.mp3';
import corePlatformAudio from '../audio/core_platform_voice.mp3';
import howItWorksAudio from '../audio/how_it_works_voice.mp3';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  RotateCcw, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
  onOpenScreeningSimulator: () => void;
}

interface VideoItem {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  src: string;
  audioSrc: string;
  fallbackSrc: string;
  duration: number; // in seconds
  chapters: {
    time: number;
    label: string;
    description: string;
  }[];
}

export const ProcessVideoSection: React.FC<Props> = ({ onOpenDemo, onOpenScreeningSimulator }) => {
  const videoList: VideoItem[] = [
    {
      id: 'core_platform',
      stepNumber: '01',
      title: '01. Core Platform & Workspace',
      subtitle: 'Real-time candidate stages, active requisitions & autonomous autopilot settings',
      badge: 'Platform Command Center',
      src: corePlatform,
      audioSrc:corePlatformAudio,
      fallbackSrc: '/videos/candidhr_core_platform.mp4',
      duration: 17.6,
      chapters: [
        { time: 0, label: 'Platform Hub', description: 'Active jobs and real-time candidate volumes' },
        { time: 6, label: 'Autopilot Active', description: 'Automatic screening and candidate routing' },
        { time: 12, label: 'Pipeline Velocity', description: 'Verified shortlist ready for team interviews' },
      ]
    },
    {
      id: 'how_it_works',
      stepNumber: '02',
      title: '02. Autonomous 5-Stage Pipeline',
      subtitle: 'From job creation and 3B talent sourcing to proctored assessments',
      badge: 'Full Autonomous Journey',
      src: autoNoumous,
      audioSrc:howItWorksAudio,
      fallbackSrc: '/videos/candidhr_how_it_works.mp4',
      duration: 20.8,
      chapters: [
        { time: 0, label: 'Job Setup', description: 'AI extracts essential skills and rubrics' },
        { time: 7, label: 'Candidate Inflow', description: 'Multi-channel matching & resume scoring' },
        { time: 14, label: 'Verified Shortlist', description: 'Assessments and automated interview results' },
      ]
    },
    {
      id: 'applicants_walkthrough',
      stepNumber: '03',
      title: '03. Applicant Walkthrough & Verdict',
      subtitle: 'Deep candidate telemetry, coding benchmarks & recorded video interview scoring',
      badge: 'Candidate 360 & Scoring',
      src: walkThrough,
      audioSrc: applicantsWalkthroughAudio,
      fallbackSrc: '/videos/candidhr_applicants_walkthrough.mp4',
      duration: 16.6,
      chapters: [
        { time: 0, label: 'Candidate Profile', description: 'Objective resume & skill breakdown' },
        { time: 5, label: 'Proctored Assessment', description: 'Real-time code evaluation and score' },
        { time: 11, label: 'Video Interview', description: 'AI behavioral assessment & hiring recommendation' },
      ]
    }
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(17.6);
  // Start with audio enabled by default; if browser requires muted autoplay, we catch and show prompt
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [audioPromptVisible, setAudioPromptVisible] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const currentVideo = videoList[activeVideoIndex];

  // Synchronize audio element with video element
  const syncAudioWithVideo = (targetTime?: number) => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (video && audio) {
      const timeToSet = targetTime !== undefined ? targetTime : video.currentTime;
      if (Math.abs(audio.currentTime - timeToSet) > 0.3) {
        audio.currentTime = timeToSet;
      }
      audio.muted = isMuted;
      audio.volume = volume;
    }
  };

  // Play both video and synced audio with sound
  const playMediaWithAudio = (unmute: boolean = false) => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    if (unmute) {
      video.muted = false;
      setIsMuted(false);
      setAudioPromptVisible(false);
      if (audio) audio.muted = false;
    }

    video.volume = volume;
    if (audio) {
      audio.volume = volume;
      audio.currentTime = video.currentTime;
    }

    const videoPromise = video.play();
    if (videoPromise !== undefined) {
      videoPromise
        .then(() => {
          setIsPlaying(true);
          setAudioPromptVisible(false);
          // Also start audio track for rich dual-sound support
          if (audio) {
            audio.play().catch(() => {});
          }
        })
        .catch(() => {
          // If browser restricts unmuted autoplay, play muted and prompt user to tap
          video.muted = true;
          setIsMuted(true);
          setAudioPromptVisible(true);
          video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        });
    }
  };

  // Switch video and auto-play with audio
  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (video) {
      video.currentTime = 0;
      setCurrentTime(0);
      setActiveChapterIndex(0);
      video.playbackRate = playbackSpeed;

      if (audio) {
        audio.currentTime = 0;
        audio.playbackRate = playbackSpeed;
      }

      playMediaWithAudio(!isMuted);
    }
  }, [activeVideoIndex]);

  // When video completes, automatically advance to next video (1 -> 2 -> 3 -> 1)
  const handleVideoEnded = () => {
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    if (video.paused) {
      // User explicitly interacted: UNMUTE and play voice loud and clear
      playMediaWithAudio(true);
    } else {
      video.pause();
      if (audio) audio.pause();
      setIsPlaying(false);
    }
  };

  const handleUnmuteAudio = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = volume > 0 ? volume : 1.0;
    setIsMuted(false);
    setAudioPromptVisible(false);

    if (audio) {
      audio.muted = false;
      audio.volume = volume > 0 ? volume : 1.0;
      audio.currentTime = video.currentTime;
      audio.play().catch(() => {});
    }

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleToggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    setAudioPromptVisible(false);

    if (audio) {
      audio.muted = nextMuted;
    }

    if (!nextMuted) {
      const targetVol = volume === 0 ? 1.0 : volume;
      video.volume = targetVol;
      setVolume(targetVol);
      if (audio) {
        audio.volume = targetVol;
        audio.currentTime = video.currentTime;
        if (!video.paused) audio.play().catch(() => {});
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    const video = videoRef.current;
    const audio = audioRef.current;

    if (video) {
      video.volume = val;
      if (val === 0) {
        video.muted = true;
        setIsMuted(true);
      } else {
        video.muted = false;
        setIsMuted(false);
        setAudioPromptVisible(false);
      }
    }

    if (audio) {
      audio.volume = val;
      audio.muted = val === 0;
      if (val > 0 && !video?.paused) {
        audio.play().catch(() => {});
      }
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const cur = video.currentTime;
    setCurrentTime(cur);

    // Sync audio position if drifting
    const audio = audioRef.current;
    if (audio && !audio.paused && Math.abs(audio.currentTime - cur) > 0.4) {
      audio.currentTime = cur;
    }

    // Map time to active chapter
    const chapters = currentVideo.chapters;
    for (let i = chapters.length - 1; i >= 0; i--) {
      if (cur >= chapters[i].time) {
        setActiveChapterIndex(i);
        break;
      }
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration || currentVideo.duration);
      video.playbackRate = playbackSpeed;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = clickRatio * (duration || currentVideo.duration);
    
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
    syncAudioWithVideo(targetTime);
  };

  const handleSelectVideo = (index: number) => {
    if (index === activeVideoIndex) return;
    setActiveVideoIndex(index);
  };

  const handleSelectChapter = (time: number, idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
    setActiveChapterIndex(idx);
    syncAudioWithVideo(time);
  };

  const handleSpeedChange = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const speeds = [1, 1.25, 1.5, 0.75];
    const currentIdx = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIdx + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  const handleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="video-demo" className="bg-[#0B0F27] py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#3D38F5]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hidden audio element ensuring robust synchronized audio across all browsers */}
      <audio
        ref={audioRef}
        key={`audio-${currentVideo.id}`}
        src={currentVideo.audioSrc}
        preload="auto"
        onEnded={() => {}}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9F96FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            Video Demonstration
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            See the AI hiring process <span className="text-brand-gradient">in action</span>
          </h2>

          <p className="text-base text-slate-300 mt-2">
            Watch the real platform screen walkthroughs with guided voice narration. When video 1 finishes, it automatically advances to video 2 and video 3.
          </p>
        </div>

        {/* Video Selector Tabs (3 Real Videos) */}
        <div className="max-w-5xl mx-auto mb-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {videoList.map((item, idx) => {
            const isActive = activeVideoIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectVideo(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#161C42] border-[#6C5CFF] shadow-lg shadow-[#3D38F5]/25 ring-1 ring-[#6C5CFF]'
                    : 'bg-[#0E1330]/75 hover:bg-[#161C42]/50 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {/* Active progress bar top indicator */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C5CFF] to-[#3D38F5]" />
                )}

                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className={`font-semibold ${isActive ? 'text-[#9F96FF]' : 'text-slate-400'}`}>
                    {item.badge}
                  </span>
                  <span className="text-slate-400">00:{Math.round(item.duration)}s</span>
                </div>

                <div className={`font-heading font-bold text-sm leading-snug ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {item.title}
                </div>

                <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Primary Video Player Console */}
        <div className="max-w-5xl mx-auto bg-[#070A1E] border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Window Header */}
          <div className="px-5 py-3 bg-[#0B0F27] border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-white/20">|</span>
              <span className="font-heading font-bold text-white text-xs">
                CandidHR.ai Platform Reel
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-slate-300 font-medium hidden sm:inline">
                {currentVideo.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#12B886]/20 text-[#4ADE9E] text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE9E] animate-pulse" />
                Auto-Advancing Sequence
              </span>
            </div>
          </div>

          {/* Video Viewport Container */}
          <div 
            className="relative aspect-[16/9] bg-black flex items-center justify-center group overflow-hidden cursor-pointer"
            onClick={handleTogglePlay}
          >
            <video
              ref={videoRef}
              key={currentVideo.id}
              src={currentVideo.src}
              className="w-full h-full object-contain bg-black"
              playsInline
              autoPlay
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnded}
            >
              <source src={currentVideo.src} type="video/mp4" />
              <source src={currentVideo.fallbackSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Big Center Play / Pause Indicator */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all z-20">
                <button
                  onClick={handleTogglePlay}
                  className="w-20 h-20 rounded-full bg-[#3D38F5] hover:bg-[#524bf8] text-white flex items-center justify-center shadow-2xl transition-all scale-100 hover:scale-105 cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </button>
              </div>
            )}

            {/* UNMUTE VOICE PROMPT (Shown if browser blocked initial sound) */}
            {(isMuted || audioPromptVisible) && isPlaying && (
              <div className="absolute inset-x-0 bottom-20 flex justify-center z-30 pointer-events-auto">
                <button
                  onClick={handleUnmuteAudio}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#3D38F5] hover:bg-[#524bf8] text-white font-bold text-xs sm:text-sm shadow-2xl transition-all hover:scale-105 cursor-pointer border border-white/25 animate-bounce"
                >
                  <Volume2 className="w-4 h-4 text-[#4ADE9E]" />
                  <span>Click to Listen with Voice Narration</span>
                </button>
              </div>
            )}

            {/* Active Chapter Overlay Tag */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#9F96FF]" />
                <span>{currentVideo.chapters[activeChapterIndex]?.label}</span>
                <span className="text-white/30">|</span>
                <span className="text-slate-300 text-[11px] font-normal">
                  {currentVideo.chapters[activeChapterIndex]?.description}
                </span>
              </div>
            </div>

            {/* Voice Narration Status / Unmute Button (Top Right) */}
            <div className="absolute top-4 right-4 z-20">
              {isMuted ? (
                <button
                  onClick={handleUnmuteAudio}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3D38F5] hover:bg-[#524bf8] text-white text-xs font-semibold shadow-xl transition-all cursor-pointer"
                  title="Click to hear voice narration"
                >
                  <VolumeX className="w-3.5 h-3.5 text-amber-300" />
                  <span>Unmute Voice</span>
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-[#4ADE9E] text-xs font-semibold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE9E] animate-ping" />
                  <Volume2 className="w-3.5 h-3.5 text-[#4ADE9E]" />
                  <span>Voice Playing</span>
                </div>
              )}
            </div>

          </div>

          {/* Custom Controls Bar */}
          <div className="px-4 sm:px-6 py-4 bg-[#090D24] border-t border-white/10 space-y-3">
            
            {/* Scrubber Timeline Bar */}
            <div 
              ref={progressBarRef}
              onClick={handleSeek}
              className="relative h-2.5 bg-white/15 hover:h-3.5 rounded-full cursor-pointer transition-all group"
            >
              {/* Progress Played */}
              <div 
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#6C5CFF] to-[#3D38F5] rounded-full"
                style={{ width: `${progressPercent}%` }}
              />

              {/* Scrubber thumb handle */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform pointer-events-none"
                style={{ left: `calc(${progressPercent}% - 8px)` }}
              />

              {/* Chapter markers */}
              {currentVideo.chapters.map((ch, i) => {
                const tickPercent = duration > 0 ? (ch.time / duration) * 100 : 0;
                return (
                  <div
                    key={ch.label}
                    onClick={(e) => handleSelectChapter(ch.time, i, e)}
                    className="absolute top-0 bottom-0 w-1 bg-white/40 hover:bg-white hover:w-2 transition-all rounded-full z-10"
                    style={{ left: `${tickPercent}%` }}
                    title={`${ch.label} (${formatTime(ch.time)})`}
                  />
                );
              })}
            </div>

            {/* Controls Row: Play/Pause, Replay, Time, Chapters, Speed, Volume, Fullscreen */}
            <div className="flex items-center justify-between gap-3 text-xs text-slate-300">
              
              {/* Left Group */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                  title={isPlaying ? "Pause video" : "Play video with voice"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      if (audioRef.current) audioRef.current.currentTime = 0;
                      playMediaWithAudio(!isMuted);
                    }
                  }}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  title="Replay video"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <div className="font-mono text-slate-300 select-none">
                  <span className="text-white font-bold">{formatTime(currentTime)}</span>
                  <span className="text-white/30 mx-1">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Center Group: Chapter navigation pills */}
              <div className="hidden md:flex items-center gap-2">
                {currentVideo.chapters.map((ch, idx) => (
                  <button
                    key={ch.label}
                    onClick={(e) => handleSelectChapter(ch.time, idx, e)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                      activeChapterIndex === idx
                        ? 'bg-[#3D38F5] text-white font-bold'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400'
                    }`}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>

              {/* Right Group: Speed, Volume slider, Mute, Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSpeedChange}
                  className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/15 font-mono text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Playback speed"
                >
                  {playbackSpeed}x
                </button>

                {/* Video Voice / Mute Control */}
                <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                  <button
                    onClick={handleToggleMute}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title={isMuted ? "Unmute video voice" : "Mute video voice"}
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-[#4ADE9E]" />}
                  </button>

                  <span className="text-[11px] font-medium text-slate-300 hidden sm:inline">Voice</span>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-14 sm:w-20 accent-[#3D38F5] cursor-pointer"
                    title="Voice narration volume"
                  />
                </div>

                <button
                  onClick={handleFullscreen}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Action Bottom Bar */}
        <div className="mt-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#4ADE9E] shrink-0" />
            <span>Ready to automate your pipeline? Experience how CandidHR saves 80% recruiter time.</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenScreeningSimulator}
              className="px-4 py-2 rounded-xl text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all cursor-pointer font-semibold"
            >
              Test Simulator Live
            </button>
            <button
              onClick={onOpenDemo}
              className="px-5 py-2 rounded-xl text-white font-bold bg-brand-gradient hover:opacity-95 shadow-lg shadow-[#3D38F5]/30 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Full Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
