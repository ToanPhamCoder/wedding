import React, { useEffect, lazy, Suspense, useState } from "react";
import LoadingSpinner from "@/component/LoadingSpinner";
import MusicPlayer from "@/component/MusicPlayer";

// Lazy load each component
const SliderComponent = lazy(() => import("@/component/SliderComponents"));
const SendMessage = lazy(() => import("@/component/SendMessage"));
const TitleComponent = lazy(() => import("@/component/TitleComponent"));
const Album = lazy(() => import("@/component/Album"));
const WeddingGallery = lazy(() => import("@/component/WeddingGallery"));
const CountdownComponent = lazy(() => import("@/component/CountDownComponent"));
const Thanks = lazy(() => import("@/component/Thanks"));
const LoveStory = lazy(() => import("@/component/LoveStory"));
const LoiNgo = lazy(() => import("@/component/LoiNgo"));
const WeddingEvents = lazy(() => import("@/component/WeddingEvents"));
const BrideGroomSection = lazy(() => import("@/component/BrideGroomSection"));
const ThankYouSection = lazy(() => import("@/component/ThankYouSection"));

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Wait until all lazy-loaded components are successfully loaded
    Promise.all([
      import("@/component/SliderComponents"),
      import("@/component/SendMessage"),
      import("@/component/TitleComponent"),
      import("@/component/Album"),
      import("@/component/WeddingGallery"),
      import("@/component/CountDownComponent"),
      import("@/component/Thanks"),
      import("@/component/LoveStory"),
      import("@/component/LoiNgo"),
      import("@/component/WeddingEvents"),
      import("@/component/BrideGroomSection"),
      import("@/component/ThankYouSection"),
    ]).then(() => {
      setIsLoading(false); // Update loading state when all components are loaded
    });
  }, []);

  if (isLoading) {
    // Show loading spinner until all components are loaded
    return <LoadingSpinner />;
  }

  return (
    <main id="heart-container" className="flex justify-center bg-[#cccccc]">
      <div className="w-[430px]">
        <div className="bg-white p-2">
          <Suspense fallback={<LoadingSpinner />}>
            <TitleComponent />
            <SliderComponent />
            <SendMessage />
            <Album />
            <WeddingGallery />
            <CountdownComponent />
            <Thanks />
            <LoveStory />
            <LoiNgo />
            <WeddingEvents />
            <BrideGroomSection />
            <ThankYouSection />
            <MusicPlayer />

          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Main;
