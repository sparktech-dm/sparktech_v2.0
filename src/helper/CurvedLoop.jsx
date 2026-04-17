import React, { useRef, useEffect, useState, useId } from "react";

const CurvedLoop = ({
  image = "", // single image URL
  width = 1500,
  height = 300,
  speed = 2,
  curveAmount = 40,
  direction = "left",
}) => {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    setPathLength(length);
    setOffset(0);
  }, []);

  useEffect(() => {
    if (pathLength === 0) return;
    let frame;

    const animate = () => {
      setOffset((prev) => {
        let newOffset = prev + (direction === "right" ? speed : -speed);
        if (newOffset < 0) newOffset += pathLength;
        if (newOffset > pathLength) newOffset -= pathLength;
        return newOffset;
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [pathLength, speed, direction]);

  const point =
    pathRef.current?.getPointAtLength(offset) || { x: 0, y: 0 };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        viewBox="0 0 1440 400"
        className="w-full overflow-visible block"
      >
        <defs>
          <path
            ref={pathRef}
            id={pathId}
            d={`M-100,200 Q720,${200 + curveAmount} 1540,200`}
            fill="none"
            stroke="transparent"
          />
        </defs>

        {/* <image
          href={image}
          width={width}
          height={height}
          x={point.x - width / 2}
          y={point.y - height / 2}
        /> */}
      </svg>
    </div>
  );
};

export default CurvedLoop;