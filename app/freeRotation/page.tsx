"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Shoes2 from "../components/Shoes2";
import Link from "next/link";

const page = () => {
  return (
    <div className=" w-screen h-screen relative flex  justify-center">
      <Link
        href={"/"}
        className=" fixed z-50 bg-[#3f3f3f] bottom-[20%] text-white px-5 py-1 rounded-full duration-300 hover:opacity-45"
      >
        Back To Home
      </Link>
      <Canvas>
        <ambientLight intensity={5} />
        <OrbitControls />
        <Shoes2 />
      </Canvas>
    </div>
  );
};

export default page;
