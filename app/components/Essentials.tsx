import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Essentials = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const titleControls = useAnimation();
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true });
  const footerControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (footerInView) {
      footerControls.start("visible");
    }
  }, [footerInView, footerControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const footerItemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="essential"
      className=" w-screen h-screen flex flex-col items-center justify-center"
    >
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        variants={containerVariants}
        className="text-3xl md:text-4xl lg:text-6xl l:text-6xl text-center font-semibold mb-12 uppercase min-w-[330px] w-[77%] md:w-[90%] leading-relaxed relative overflow-hidden"
      >
        <motion.span variants={itemVariants} className="inline-block">
          Step&nbsp;
        </motion.span>
        <motion.span variants={itemVariants} className="inline-block">
          up—
        </motion.span>
        <motion.span variants={itemVariants} className="inline-block">
          grab&nbsp;
        </motion.span>
        <motion.span variants={itemVariants} className="inline-block">
          your
        </motion.span>
        <span>
          &emsp; &emsp; <span className="hidden md:inline-block">&emsp;</span>
        </span>
        <motion.span variants={itemVariants} className="inline-block">
          today.
        </motion.span>
      </motion.h2>
      <span className=" text-3xl text-[#154B88] font-semibold mb-10">
        $ 99.99
      </span>
      <a
        href=""
        className=" text-white bg-black px-7 py-3 text-xl font-semibold rounded-xl mb-20 lg:mb-14"
      >
        Buy Now
      </a>
      <div
        ref={footerRef}
        className="w-80 lg:w-full sm:text-sm flex flex-col md:flex-row items-start md:justify-center space-y-4 md:space-y-0 md:space-x-10 "
      >
        <motion.div
          initial="hidden"
          animate={footerControls}
          variants={containerVariants}
          className=""
        >
          <p className=" font-medium relative w-80 md:w-40 h-6 overflow-hidden">
            <motion.span variants={footerItemVariants} className="absolute">
              CORE ALIGN
            </motion.span>
          </p>
          <p className=" relative w-80 md:w-40 h-6 overflow-hidden">
            <motion.span variants={footerItemVariants} className="absolute">
              980 302 912
            </motion.span>
          </p>
          <div className="underline relative w-80 md:w-40 h-6 overflow-hidden">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              corealign@coal.com
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={footerControls}
          variants={containerVariants}
          className=""
        >
          <p className=" font-medium relative w-80 md:w-40 h-6 overflow-hidden">
            <motion.span variants={footerItemVariants} className="absolute">
              DHIYA ADLI HIDAYAT
            </motion.span>
          </p>
          <p className=" relative w-80 md:w-40 h-6 overflow-hidden">
            <motion.span variants={footerItemVariants} className="absolute">
              920 326 112
            </motion.span>
          </p>
          <div className="underline relative w-80 md:w-40 h-6 overflow-hidden">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              adlihidayat30@gmail.com
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={footerControls}
          variants={containerVariants}
          className=""
        >
          <div className="relative w-80 md:w-24 h-6 overflow-hidden font-medium">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              ABOUT US
            </motion.a>
          </div>
          <div className=" relative w-80 md:w-24 h-6 overflow-hidden font-medium">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              PARTNERSHIP
            </motion.a>
          </div>
          <div className=" relative w-80 md:w-24 h-6 overflow-hidden font-medium">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              FORUM
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={footerControls}
          variants={containerVariants}
          className=""
        >
          <div className="relative w-80 md:w-40 h-6 overflow-hidden font-medium">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              TERMS AND SERVICE
            </motion.a>
          </div>
          <div className=" relative w-80 md:w-40 h-6 overflow-hidden font-medium">
            <motion.a
              href=""
              variants={footerItemVariants}
              className="absolute"
            >
              HELP
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Essentials;
