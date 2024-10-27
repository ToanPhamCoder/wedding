import React, { useEffect, lazy, Suspense } from "react";
import MusicPlayer from "./MusicPlayer";
import LoadingSpinner from "./LoadingSpinner";

// Lazy load each component
const SliderComponent = lazy(() => import("./SliderComponents"));
const SendMessage = lazy(() => import("./SendMessage"));
const TitleComponent = lazy(() => import("./TitleComponent"));
const Album = lazy(() => import("./Album"));
const WeddingGallery = lazy(() => import("./WeddingGallery"));

const CountdownComponent = lazy(() => import("./CountDownComponent"));
const Thanks = lazy(() => import("./Thanks"));
const LoveStory = lazy(() => import("./LoveStory"));
const LoiNgo = lazy(() => import("./LoiNgo"));
const WeddingEvents = lazy(() => import("./WeddingEvents"));
const BrideGroomSection = lazy(() => import("./BrideGroomSection"));
const ThankYouSection = lazy(() => import("./ThankYouSection"));

const Main = () => {
  const createHeart = () => {
    const heartContainer = document.getElementById("heart-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 80 + 10 + "vw";
    heart.style.width = heart.style.height = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.top = window.scrollY + -50 + "px";

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="heart-container" className="flex justify-center bg-[#cccccc]">
      <div className="w-[430px]">
        <div className="bg-white p-2">
        <Suspense fallback={<LoadingSpinner />}> 
        <TitleComponent />
            <SliderComponent />
            <SendMessage />
            <Album />
          <WeddingGallery  />

            <CountdownComponent />
            <Thanks />
            <LoveStory />
            <LoiNgo />
            <WeddingEvents />
            <BrideGroomSection />
            <ThankYouSection />
          </Suspense>
          <MusicPlayer/>

        </div>
        
      </div>
    </main>
  );
};

export default Main;
