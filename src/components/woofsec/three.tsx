/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-boolean-cast */
import { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angles";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import CarModel from "./Car";

const ThreeApp = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const orbitControlsRef = useRef<any>(null!);
  useFrame((state) => {
    // console.log(state);
    if (!!orbitControlsRef.current) {
      const { x, y } = state.pointer;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log("OUT ", orbitControlsRef);
    }
  }, [orbitControlsRef.current]);

  // const depthBuffer = useDepthBuffer({ frames: 1 });
  const ballRef = useRef<THREE.Mesh>(null!);
  useEffect(() => {
    if (!!ballRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: true });

      // x-axis motion
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: "power2.out",
      });

      // y-axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: "bounce.out",
        },
        "<"
      );

      // customBounce(timeline, ballRef);
      // Play
      timeline.play();
    }
  }, [ballRef.current]);
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />

      {/* Ball */}
      <mesh position={[-2, 1.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* CAR */}
      <CarModel
        scale={0.01}
        position={[0, 0, -2]}
        rotation={[0, angleToRadians(-50), 0]}
      />

      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Spotlight light */}
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />
      {/* <pointLight args={["#ffffff", 1]} position={[-3, 0, 1]} /> */}
      {/* <SpotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.3]}
        position={[-3, 0, 1]}
      /> */}
      {/* <MovingSpot
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[3, 3, 2]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[1, 3, 0]}
      /> */}

      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2266cc" />
          {/* <LayerMaterial side={THREE.BackSide} /> */}
        </mesh>
      </Environment>
    </>
  );
};

export default ThreeApp;
