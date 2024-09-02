import { useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const FreeRotate = ({ scrollYProgress }: any) => {
  const Sticker1 = useTransform(scrollYProgress, [0, 1], [600, -300]);
  const Sticker2 = useTransform(scrollYProgress, [0, 1], [300, -100]);

  return (
    <section
      id="360"
      className="w-screen h-screen  flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute mr-[68%] mb-[165px]"
        style={{ y: Sticker1 }}
      >
        <Image
          src={"/img/sticker1.webp"}
          alt="barcode"
          height={128}
          width={128}
          className="hidden lg:block "
        />
      </motion.div>
      <motion.div
        className="absolute ml-[70%] mt-[145px]"
        style={{ y: Sticker2 }}
      >
        <Image
          src={"/img/sticker2.webp"}
          alt="barcode"
          height={128}
          width={128}
          className="hidden lg:block "
        />
      </motion.div>
      <h1 className=" uppercase text-4xl lg:text-[40px] font-bold w-80 lg:w-full text-center absolute mb-[420px] lg:mb-52">
        Take a closer look.
      </h1>
      <div className="flex -space-x-1 lg:-space-x-3 mt-20 md:mt-0">
        <Image
          src={"/img/bg-line.webp"}
          alt="barcode"
          height={100}
          width={100}
          className="w-[68px] lg:w-24"
        />
        <Image
          src={"/img/bg-line.webp"}
          alt="barcode"
          height={100}
          width={100}
          className="w-[68px] lg:w-24"
        />
        <Image
          src={"/img/bg-line.webp"}
          alt="barcode"
          height={100}
          width={100}
          className="w-[68px] lg:w-24"
        />
        <Image
          src={"/img/bg-line.webp"}
          alt="barcode"
          height={100}
          width={100}
          className="w-[68px] lg:w-24"
        />
        <Image
          src={"/img/bg-line.webp"}
          alt="barcode"
          height={100}
          width={100}
          className="w-[68px] lg:w-24"
        />
      </div>
      <Image
        src={"/img/ellipse.webp"}
        alt="barcode"
        height={1000}
        width={1000}
        className="absolute mt-[500px]"
      />
    </section>
  );
};

export default FreeRotate;
