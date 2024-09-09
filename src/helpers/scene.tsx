import React, { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { useControls } from "leva";

interface IProps {
  children: React.ReactNode;
}

const Scene: React.FC<IProps> = ({ children }): JSX.Element => {
  const directionalLightRef = useRef<DirectionalLight>(null!);
  const { lightcolor, lightIntensity } = useControls({
    lightcolor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
    },
  });

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={lightIntensity}
        ref={directionalLightRef}
        color={lightcolor}
      />
      <ambientLight intensity={0.2} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"orange"} />
        <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />
        <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={"teal"} />
        <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={"blue"} />
      </group> */}
      {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"orange"} /> */}
      {/* <Torus position={[2, 0, 0]} size={[0.8, 0.1, 30, 30]} color={"blue"} />*/}
      {/* <TorusKnot
        position={[-2, 0, 0]}
        size={[0.5, 0.1, 1000, 50]}
        color={"hotpink"}
      /> */}
      {/* <Sphere
        position={[0, 0, 0]}
        args={[1, 30, 30]}
        color={"orange"}
        wireframe
      /> */}
      {children}
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default Scene;
