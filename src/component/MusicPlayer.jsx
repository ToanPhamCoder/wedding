import React, { useState, useRef, useEffect } from 'react';
import video from "../assets/video/videoplayback.mp4";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // Autoplay muted audio on load
      audioRef.current.muted = true;
      audioRef.current.play().catch((error) => {
        console.log("Autoplay blocked by the browser:", error);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.muted = false; // Unmute when starting to play
        audioRef.current.play().catch((error) => {
          console.log("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center space-x-3">
      <button
        onClick={togglePlayPause}
        className="animate-blink-border w-12 h-12 rounded-full flex items-center justify-center bg-[#d98ea1] shadow-lg transition duration-300 hover:bg-[#c35d77]"
      >
        {isPlaying ? <FaVolumeMute color="white" /> : <FaVolumeHigh color="white" />}
      </button>

      <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 shadow transition duration-300">
        {isPlaying ? 'Đang phát nhạc!' : 'Click vào đây để phát nhạc!'}
      </span>

      <audio ref={audioRef} src={video} loop />
    </div>
  );
};

export default MusicPlayer;
