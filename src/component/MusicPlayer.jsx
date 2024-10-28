import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import video from "../assets/video/videoplayback.mp4"
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const audioRef = useRef(null);

  // Attempt to start audio and handle autoplay restrictions
  const startAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setAutoplayFailed(false);
      } catch (error) {
        console.log("Autoplay failed:", error);
        setAutoplayFailed(true);
        setIsPlaying(false);
      }
    }
  };

  // Try autoplay when component mounts
  useEffect(() => {
    startAudio();
  }, []);

  // Handle user interaction if autoplay fails
  useEffect(() => {
    const handleUserInteraction = () => {
      if (autoplayFailed) {
        startAudio();
      }
    };

    // Add multiple interaction listeners to increase chances of successful playback
    const events = ['click', 'touchstart', 'keydown', 'mousedown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [autoplayFailed]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        startAudio();
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center space-x-3">
      <button
        onClick={togglePlayPause}
        className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#d98ea1] shadow-lg transition duration-300 hover:bg-[#c35d77] ${
          autoplayFailed ? 'animate-bounce' : ''
        }`}
      >
        {isPlaying ? <FaVolumeHigh color="white" /> : <FaVolumeMute color="white" />}
      </button>

      <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 shadow transition duration-300">
        {isPlaying ? 'Đang phát nhạc!' : 'Nhấn để phát nhạc!'}
      </span>

      <audio 
        ref={audioRef} 
        src={video} 
        loop 
        style={{ display: 'none' }} 
      />
    </div>
  );
};

export default MusicPlayer;