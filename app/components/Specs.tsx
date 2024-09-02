import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, Variants } from "framer-motion";

const variantsHeader: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Specs = ({ scrollYProgress, page2Status }: any) => {
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [300, -600]);

  const headerAnimation = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 1],
    [200, 200, 0, 0]
  );

  return (
    <section
      id="spec"
      className=" w-screen h-screen relative flex flex-col items-center justify-center overflow-hidden"
    >
      {page2Status === 0 && (
        <>
          <h1 className=" uppercase text-[36px] lg:text-[40px] font-bold w-80 h-20 lg:w-96 leading-10 absolute lg:mr-[42%] mb-[450px] lg:mb-64  overflow-hidden">
            <motion.span style={{ y: headerAnimation }} className=" absolute">
              Engineered for everything
            </motion.span>
          </h1>

          <motion.div
            style={{ y: y2 }}
            className="absolute mr-[63%] lg:mr-[63%] mb-60 lg:mb-0 lg:mt-36"
          >
            <Image
              src={"/img/star.webp"}
              alt="barcode"
              height={180}
              width={180}
              className="w-10 lg:w-14 "
            />
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className="absolute mr-[55%] lg:mr-[50%] mt-[650px] lg:mt-[450px]"
          >
            <Image
              src={"/img/star.webp"}
              alt="barcode"
              height={180}
              width={180}
              className="w-8 lg:w-10 "
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute ml-[64%] lg:ml-[48%] mt-[700px] lg:mt-[450px]"
          >
            <Image
              src={"/img/star.webp"}
              alt="barcode"
              height={180}
              width={180}
              className="w-10 lg:w-14 "
            />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Specs;
