import { useTransform, motion } from "framer-motion";
import { Qwigley, Redacted_Script } from "next/font/google";
import React from "react";

const qwigley = Qwigley({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const redactedScript = Redacted_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

function Hero({ scrollYProgress }: any) {
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "2000deg"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, -5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, -4]);

  return (
    <section className=" w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <motion.div
        // style={{ rotate, opacity, scale }}
        className=" relative mb-[420px] lg:mb-36"
      >
        <motion.h1 className=" text-8xl md:text-[150px] lg:text-[300px] font-semibold">
          HYPFO
        </motion.h1>
        <span
          className={`${qwigley.className} text-[#154B88] text-8xl lg:text-9xl absolute right-0 lg:right-5 -bottom-10`}
        >
          334
        </span>
      </motion.div>
      <div className=" absolute mt-[450px] lg:bottom-20 flex flex-col items-center">
        <span
          className={`${redactedScript.className} text-3xl lg:text-4xl mb-10 lg:mb-0`}
        >
          Elevate Your Game
        </span>
        <span className=" text-center sm:text-sm w-[75%] lg:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          odit, fugit in rerum, voluptate
        </span>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
