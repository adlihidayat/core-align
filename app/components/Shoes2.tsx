import React from "react";
import { useGLTF } from "@react-three/drei";

export function Shoes2(props: any) {
  const { nodes, materials } = useGLTF("./models/shoes.glb") as unknown as {
    nodes: {
      [key: string]: any;
    };
    materials: {
      [key: string]: any;
    };
  };
  return (
    <group {...props} dispose={null}>
      <group scale={10.465}>
        <mesh
          geometry={nodes.Retopo_3DModel_mesh002.geometry}
          material={materials["3DModel_Custom.002"]}
        />
        <mesh
          geometry={nodes.Retopo_3DModel_mesh002_1.geometry}
          material={materials["3DModel_Custom.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/shoes.glb");

export default Shoes2;
