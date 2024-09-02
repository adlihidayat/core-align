import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Overlay = ({ setPage2Status, page2Status }: any) => {
  const { scrollYProgress } = useScroll();
  const barcodeRef = useRef<any>();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -500]);
  const see360button = useTransform(
    scrollYProgress,
    [0, 0.6, 0.68, 1],
    [100, 100, 0, 0]
  );

  const handleMouseMove = (e: MouseEvent) => {
    if (barcodeRef.current) {
      const rect = barcodeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 30; // Adjust sensitivity
      const rotateX = ((y - centerY) / centerY) * -30; // Adjust sensitivity

      setTilt({ rotateX, rotateY });
    }
  };

  const tiltEffect = {
    rest: { rotateX: 0, rotateY: 0, scale: 1, transition: { duration: 0.3 } },
    hover: {
      rotateY: tilt.rotateY,
      rotateX: tilt.rotateX,
      scale: 1.05,
      transition: {
        // type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  useEffect(() => {
    const currentRef = barcodeRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      return () => {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [tilt]);

  const handleBackClicked = (e: any) => {
    e.preventDefault(); // Prevent default scrolling behavior
    setPage2Status(0); // Hide overlay and underlay
  };
  const handleLacesClicked = (e: any) => {
    e.preventDefault(); // Prevent default scrolling behavior
    setPage2Status(1); // Hide overlay and underlay
  };
  const handleMaterialClicked = (e: any) => {
    e.preventDefault(); // Prevent default scrolling behavior
    setPage2Status(2); // Hide overlay and underlay
  };
  const handleOutsoleClicked = (e: any) => {
    e.preventDefault(); // Prevent default scrolling behavior
    setPage2Status(3); // Hide overlay and underlay
  };

  return (
    <div className="absolute z-30">
      <div className=" w-screen h-screen"></div>
      <div className=" w-screen h-screen relative flex flex-col items-center justify-center overflow-hidden">
        {page2Status === 0 && (
          <>
            <motion.div
              ref={barcodeRef}
              style={{ y: y1 }}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={tiltEffect}
              className="hidden px-3 pt-3 pb-3  rounded-xl shadow-xl lg:flex flex-col items-center absolute ml-[63%] mb-32 bg-white"
            >
              <Image
                src={"/img/barcode.webp"}
                alt="barcode"
                height={180}
                width={180}
                className=""
              />
              <span className="mt-1 font-semibold">SCAN ME!</span>
            </motion.div>
            <div className=" flex items-center space-x-4 absolute mr-[65%] md:mr-[35%] mt-44 md:mt-0">
              <span className=" font-semibold">LACES</span>
              <button
                onClick={handleLacesClicked}
                className=" w-[26px] h-[26px] text-center text-white rounded-full bg-[#B7D4FF] hover:bg-[#7b9ccc] duration-300"
              >
                +
              </button>
            </div>
            <div className=" flex items-center space-x-4 absolute mr-[60%] lg:mr-[50%] mt-20 lg:mt-40">
              <span className=" font-semibold">MATERIAL</span>
              <button
                onClick={handleMaterialClicked}
                className=" w-[26px] h-[26px] text-center text-white rounded-full bg-[#B7D4FF] hover:bg-[#7b9ccc] duration-300"
              >
                +
              </button>
            </div>
            <div className=" flex items-center space-x-4 absolute ml-[50%] lg:ml-[40%] mt-[450px] lg:mt-40">
              <button
                onClick={handleOutsoleClicked}
                className=" w-[26px] h-[26px] text-center text-white rounded-full bg-[#B7D4FF] hover:bg-[#7b9ccc] duration-300"
              >
                +
              </button>
              <span className=" font-semibold">OUTSOLE</span>
            </div>
          </>
        )}
        {page2Status === 1 && (
          <div className="absolute flex flex-col items-start space-y-5 md:mr-[32%] mt-[50vh] md:mt-0 md:mb-20">
            <div>
              <h1 className=" text-3xl font-semibold uppercase">
                Waxed Cotton Laces
              </h1>
              <span className=" font-semibold text-blue-400">
                Durable, water-resistant, and with a sleek finish that resists
                fraying.
              </span>
            </div>
            <p className="w-60 md:w-96 text-sm text-gray-600">
              Crafted with premium materials, these laces offer unparalleled
              durability and style. Resistant to wear and tear, they enhance
              your footwear with a perfect blend of strength and elegance.
            </p>
            <div className="flex space-x-3">
              <Image
                src={"/img/illustration/laces1.webp"}
                alt="barcode"
                height={180}
                width={180}
                className="w-24 h-24"
              />
              <Image
                src={"/img/illustration/laces2.webp"}
                alt="barcode"
                height={180}
                width={180}
                className="w-24 h-24"
              />
            </div>
            <button
              className=" bg-[#3b3c3d] px-4 py-1 text-sm text-[#f7f7f7] rounded-full  hover:opacity-50 duration-300"
              onClick={handleBackClicked}
            >
              See Other Part
            </button>
          </div>
        )}
        {page2Status === 2 && (
          <div className="absolute flex flex-col items-start space-y-5 md:ml-[45%] mt-[50vh] md:mt-0">
            <div>
              <h1 className=" text-3xl font-semibold uppercase">Gore-Tex</h1>
              <span className=" font-semibold text-blue-400">
                omfort, durability, and style.
              </span>
            </div>
            <p className="w-60 md:w-96 text-sm text-gray-600">
              Crafted from top-grade full-grain leather, these shoes offer
              unmatched durability and a timeless look. Designed for comfort and
              style, they are perfect for any occasion.
            </p>
            <div className="flex space-x-3">
              <Image
                src={"/img/illustration/material1.webp"}
                alt="barcode"
                height={180}
                width={180}
                className="w-24 h-24"
              />
              <Image
                src={"/img/illustration/material2.webp"}
                alt="barcode"
                height={180}
                width={180}
                className="w-24 h-24"
              />
            </div>
            <button
              className=" bg-[#3b3c3d] px-4 py-1 text-sm text-[#f7f7f7] rounded-full  hover:opacity-50 duration-300"
              onClick={handleBackClicked}
            >
              See Other Part
            </button>
          </div>
        )}
        {page2Status === 3 && (
          <div className="absolute flex flex-col md:flex-row items-start space-y-5 md:space-y-0 md:space-x-5 mt-[50vh] md:mt-80">
            <div>
              <h1 className=" text-3xl font-semibold uppercase">
                blown rubber
              </h1>
              <span className=" font-semibold text-blue-400">
                superior traction, durability, and comfort.
              </span>
            </div>
            <p className="w-60 md:w-96 text-sm text-gray-800">
              Featuring a premium Vibram rubber outsole, these shoes deliver
              exceptional grip, durability, and comfort. Perfect for any
              terrain, they ensure stability and longevity with every step.
            </p>
            <div className="flex space-x-3">
              <Image
                src={"/img/illustration/outsole1.webp"}
                alt="barcode"
                height={180}
                width={180}
                className="w-24 h-24"
              />
              <Image
                src={"/img/illustration/outsole2.webp"}
                alt="barcode"
                height={180}
                width={180}
                className="w-24 h-24"
              />
            </div>
            <button
              className=" bg-[#3b3c3d] px-4 py-1 text-sm text-[#f7f7f7] rounded-full  hover:opacity-50 duration-300"
              onClick={handleBackClicked}
            >
              See Other Part
            </button>
          </div>
        )}
      </div>
      <div className=" w-screen h-screen relative flex justify-center">
        <div className="absolute bottom-[5%] w-24 h-8 overflow-hidden">
          <motion.button
            style={{ y: see360button }}
            className="absolute bg-[#3b3c3d] text-[#f7f7f7] px-5 pt-[2px] pb-1 rounded-full hover:opacity-50 duration-300"
          >
            <Link href={"/freeRotation"}>See 360</Link>
          </motion.button>
        </div>
      </div>
      <div className=" w-screen h-screen"></div>
    </div>
  );
};

export default Overlay;
