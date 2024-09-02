"use client";

import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";
import { Playfair_Display } from "next/font/google";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import Underlay from "./components/Underlay";
import Overlay from "./components/Overlay";
import Lenis from "lenis";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [page2Status, setPage2Status] = useState(0);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(newLenis);

    return () => {
      // Cleanup function to stop animation frame
      // Note: `cancelAnimationFrame` requires the ID returned by `requestAnimationFrame`
      // but here we're only cleaning up the `Lenis` instance.
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section && lenis) {
      lenis.scrollTo(section, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <ReactLenis root className="w-screen overflow-x-hidden">
      <>
        <a
          href="/"
          className={`${playfairDisplay.className} fixed top-20 left-28 font-bold text-3xl z-50 hidden lg:flex items-center justify-center`}
        >
          <span>C</span>
          <span className="absolute mt-3 ml-5">A</span>
        </a>
        <button
          onClick={() => handleScrollToSection("spec")}
          className="fixed top-20 right-28 font-bold text-lg z-50 hidden lg:block"
        >
          SPEC
        </button>
        <button
          onClick={() => handleScrollToSection("360")}
          className="fixed bottom-20 left-28 font-bold text-lg z-50 hidden lg:block"
        >
          360°
        </button>
        <button
          onClick={() => handleScrollToSection("essential")}
          className="fixed bottom-20 right-28 font-bold text-lg z-50 hidden lg:block"
        >
          ESSENTIAL
        </button>
      </>
      <Overlay setPage2Status={setPage2Status} page2Status={page2Status} />
      <Underlay page2Status={page2Status} />
      <div className="w-screen h-screen fixed">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
          <Experience page2Status={page2Status} />
        </Canvas>
      </div>
    </ReactLenis>
  );
}
