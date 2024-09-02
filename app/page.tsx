"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Playfair_Display, Poppins } from "next/font/google";
import Underlay from "./components/Underlay";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import Overlay from "./components/Overlay";
import Lenis from "lenis";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
export default function Home() {
  const [page2Status, setPage2Status] = useState(0);

  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      lenis.scrollTo(section, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      {page2Status === 0 && <></>}
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
