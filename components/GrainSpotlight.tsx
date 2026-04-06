"use client";
import { useEffect, useRef, useState } from "react";

export default function GrainSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.innerWidth < 768 ||
        !window.matchMedia("(hover: hover)").matches
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      {!isMobile && <div ref={spotlightRef} className="spotlight" aria-hidden="true" />}
    </>
  );
}
