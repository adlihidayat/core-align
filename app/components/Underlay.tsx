import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import Essentials from "./Essentials";
import Specs from "./Specs";
import FreeRotate from "./FreeRotate";
import { useScroll } from "framer-motion";

const Underlay = ({ page2Status }: any) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute">
      <Hero scrollYProgress={scrollYProgress} />
      <Specs scrollYProgress={scrollYProgress} page2Status={page2Status} />
      <FreeRotate scrollYProgress={scrollYProgress} />
      <Essentials />
    </div>
  );
};

export default Underlay;
