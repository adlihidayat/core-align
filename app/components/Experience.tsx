import React, { useEffect, useState } from "react";
import Shoes from "./Shoes";
import { useScroll } from "framer-motion";
import { OrbitControls } from "@react-three/drei";

const Experience = ({ page2Status }: any) => {
  const [isFreeRotate, setIsFreeRotate] = useState(false);

  return (
    <>
      <OrbitControls enabled={isFreeRotate} />
      <directionalLight
        castShadow
        intensity={1}
        position={[-2, 10, 5]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={5000}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <ambientLight intensity={5} />
      <Shoes page2Status={page2Status} />
      <mesh
        receiveShadow
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={50}
      >
        <planeGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.5} />
      </mesh>
    </>
  );
};

export default Experience;
