import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll, useSpring, useTransform } from "framer-motion";

function Shoes(props: any) {
  const { nodes, materials } = useGLTF("./models/shoes.glb") as unknown as {
    nodes: {
      [key: string]: any;
    };
    materials: {
      [key: string]: any;
    };
  };
  const { scrollYProgress } = useScroll();
  const shoeRef = useRef<THREE.Group>(null!);
  const [dimensions, setDimensions] = useState({
    width: 1432, // Fallback values
    height: 776,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //initialize rotation val
  let xRotationValue: number;
  let yRotationValue: number;
  let zRotationValue: number;
  //initialize position val
  let xPositionValue: number;
  let yPositionValue: number;
  let zPositionValue: number;
  switch (props.page2Status) {
    case 0:
      xRotationValue = 0.05;
      yRotationValue = -0.15;
      zRotationValue = 0.06;
      xPositionValue = 0.2;
      yPositionValue = 0;
      zPositionValue = 1;
      break;
    case 1:
      xRotationValue = 0.0;
      yRotationValue = -0.15;
      zRotationValue = 0;
      xPositionValue = 0.7;
      yPositionValue = -0.15;
      zPositionValue = 1.5;
      break;
    case 2:
      xRotationValue = 0.0;
      yRotationValue = -0.25;
      zRotationValue = 0.0;
      xPositionValue = -1;
      yPositionValue = -0.25;
      zPositionValue = 1.2;
      break;
    case 3:
      xRotationValue = -0.3;
      yRotationValue = -0.25;
      zRotationValue = 0;
      xPositionValue = 0;
      yPositionValue = 1.2;
      zPositionValue = 2.2;
      break;
    default:
      xRotationValue = 0.05;
      yRotationValue = -0.15;
      zRotationValue = 0.06;
      xPositionValue = 0.05;
      yPositionValue = -0.15;
      zPositionValue = 0.06;
  }

  const xRotation = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.35, 0.7, 1],
      [0, xRotationValue, -0.08, 0]
    ),
    {
      stiffness: 100,
      damping: 20,
    }
  );
  const yRotation = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.35, 0.7, 1],
      [-0.25, yRotationValue, -0.1, 0.75]
    ),
    {
      stiffness: 100,
      damping: 20,
    }
  );
  const zRotation = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.35, 0.7, 1],
      [0.05, zRotationValue, 0.0, 0]
    ),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const xPos = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0, xPositionValue, 0.2, (4.8 * 1432) / dimensions.width]
  );
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [
      -0.5,
      yPositionValue,
      (-1 * 776) / dimensions.height,
      -2.2 * (dimensions.height / 776),
    ]
  );
  const zPos = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [1, zPositionValue, 0.8, -13]
  );

  const xPosMobile = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0, 0.2, 0.2, -2.5]
  );
  const yPosMobile = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [-2.2, props.page2Status === 0 ? -2.5 : 0, -3, -3.9]
  );
  const zPosMobile = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [-4, -3, -2.8, -38]
  );

  useFrame(() => {
    if (shoeRef.current) {
      // Get the current scroll progress value
      const scrollXRotation = xRotation.get();
      const scrollYRotation = yRotation.get();
      const scrollZRotation = zRotation.get();

      const scrollXPos = xPos.get();
      const scrollYPos = yPos.get();
      const scrollZPos = zPos.get();

      //mobile
      const scrollXPosMobile = xPosMobile.get();
      const scrollYPosMobile = yPosMobile.get();
      const scrollZPosMobile = zPosMobile.get();

      // Map scroll values to rotation and position in radians/units
      const rotationX = scrollXRotation * 2 * Math.PI; // Rotate around X-axis
      const rotationY = scrollYRotation * 2 * Math.PI; // Rotate around Y-axis
      const rotationZ = scrollZRotation * 2 * Math.PI; // Rotate around Z-axis

      // Apply rotations and positions to the model
      shoeRef.current.rotation.x = rotationX;
      shoeRef.current.rotation.y = rotationY;
      shoeRef.current.rotation.z = rotationZ;

      shoeRef.current.position.x = isMobile ? scrollXPosMobile : scrollXPos;
      shoeRef.current.position.y = isMobile ? scrollYPosMobile : scrollYPos;
      shoeRef.current.position.z = isMobile ? scrollZPosMobile : scrollZPos;

      shoeRef.current.scale.x = -1;
    }
  });

  return (
    <group ref={shoeRef} {...props} dispose={null}>
      <group scale={11.465}>
        <mesh
          castShadow
          geometry={nodes.Retopo_3DModel_mesh002.geometry}
          material={materials["3DModel_Custom.002"]}
        />
        <mesh
          castShadow
          geometry={nodes.Retopo_3DModel_mesh002_1.geometry}
          material={materials["3DModel_Custom.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/shoes.glb");
export default Shoes;
