import React, { useEffect, useRef, useState } from "react";

const GlassCursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent));

    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  if (isMobile) {
    // ✅ On mobile/tablet: do not render rocket cursor and do not hide system cursor
    return null;
  }

  return (
    <>
      {/* ✅ Cursor hidden only for desktop */}
      <style>
        {`
          body, a, button, input, textarea, select {
            cursor: none !important;
          }

          .rocket-cursor {
            position: fixed;
            width: 70px;
            height: 70px;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
          }

          .rocket-img {
            width: 100%;
            height: 100%;
            position: relative;
            transition: transform 0.2s ease;
          }

          .flame {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 30px;
            background: radial-gradient(
              ellipse at center,
              rgba(255, 255, 150, 0.9) 0%,
              rgba(255, 165, 0, 0.8) 50%,
              rgba(255, 0, 0, 0.7) 100%
            );
            border-radius: 50%;
            filter: blur(3px);
            animation: flameFlicker 0.15s infinite alternate;
            z-index: -1;
          }

          @keyframes flameFlicker {
            0% { transform: translateX(-50%) scaleY(1); opacity: 0.9; }
            100% { transform: translateX(-50%) scaleY(1.3); opacity: 0.6; }
          }
        `}
      </style>

      <div className="rocket-cursor" ref={cursorRef}>
        <img src="/rockect.png" alt="rocket" className="rocket-img" />
        <div className="flame"></div>
      </div>
    </>
  );
};

export default GlassCursor;
