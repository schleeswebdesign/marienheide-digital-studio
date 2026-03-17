import { useState, useEffect } from "react";
import logoImg from "@/assets/logo-schlees.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(onComplete, 1600);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#0a0f1a",
        zIndex: 9999,
        transition: "opacity 0.4s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <img src={logoImg} alt="Logo" style={{ height: "100px", marginBottom: "32px" }} />
      <div
        style={{
          width: "200px",
          height: "2px",
          backgroundColor: "rgba(125,211,252,0.15)",
          borderRadius: "1px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#7DD3FC",
            borderRadius: "1px",
            animation: "loading-bar 1.2s ease-out forwards",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
