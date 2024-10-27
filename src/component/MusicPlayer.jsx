import React, { useState, useRef, useEffect } from 'react';
import video from "../assets/video/videoplayback.mp4";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Track if playback has started
  const audioRef = useRef(null);

  // Function to start audio and update state
  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true); // Mark that audio has started
      }).catch((error) => {
        console.log("Playback failed:", error);
      });
    }
  };

  // Scroll listener to start audio if user scrolls
  useEffect(() => {
    const handleScrollOrClick = () => {
      if (!hasStarted) {
        startAudio(); // Try to start audio playback on first scroll or click
      }
    };

    // Add scroll event listener and click event on the button for initial interaction
    window.addEventListener("scroll", handleScrollOrClick);

    return () => {
      window.removeEventListener("scroll", handleScrollOrClick);
    };
  }, [hasStarted]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        startAudio(); // Reuse startAudio to handle click-based playback
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center space-x-3">
      <button
        onClick={togglePlayPause}
        className="animate-blink-border w-12 h-12 rounded-full flex items-center justify-center bg-[#d98ea1] shadow-lg transition duration-300 hover:bg-[#c35d77]"
      >
        {isPlaying ? <FaVolumeHigh color="white" /> : <FaVolumeMute color="white" />}
      </button>

      <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 shadow transition duration-300">
        {isPlaying ? 'Đang phát nhạc!' : 'Nhấn hoặc cuộn để phát nhạc!'}
      </span>

      <audio ref={audioRef} src={video} loop style={{ display: 'none' }} />
    </div>
  );
};

export default MusicPlayer;
