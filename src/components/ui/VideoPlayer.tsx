'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface VideoPlayerProps {
  src: string;
  poster: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className,
  onPlay,
  onPause
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      onPlay?.();
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPause?.();
    };

    const handleError = () => {
      setError(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [onPlay, onPause]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  if (error) {
    return (
      <div className={cn('relative bg-cloud rounded-lg overflow-hidden aspect-video flex items-center justify-center', className)}>
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-slate/10 flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-slate/50" />
          </div>
          <p className="text-slate font-medium">Video placeholder</p>
          <p className="text-sm text-slate/70 mt-1">{title || 'Video content coming soon'}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('relative bg-black rounded-lg overflow-hidden group', className)}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay */}
      {controls && (
        <button
          onClick={togglePlay}
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity',
            isPlaying && !showControls ? 'opacity-0' : 'opacity-100'
          )}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {!isPlaying && (
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/90 flex items-center justify-center transform transition-transform hover:scale-110">
              <Play className="w-8 h-8 lg:w-10 lg:h-10 text-forest-green ml-1" />
            </div>
          )}
        </button>
      )}

      {/* Control Bar */}
      {controls && (
        <div className={cn(
          'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity',
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        )}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white ml-0.5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
            </div>

            {title && (
              <div className="flex-1 text-white text-sm font-medium truncate">
                {title}
              </div>
            )}

            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
