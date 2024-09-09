import { useFrame } from "@react-three/fiber";
import { sizeProps, colorProps, positionProps } from "../types";
import { useRef } from "react";
import { Mesh } from "three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useControls } from "leva";

type SphereProps = {
  position: positionProps;
  size: sizeProps;
  color: colorProps;
};

const TorusKnot: React.FC<SphereProps> = ({ position, size }): JSX.Element => {
  const meshRef = useRef<Mesh>(null!);

  const { color, radius } = useControls({
    color: "teal",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5,
    },
  });

  useFrame((_state, delta) => {
    // meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 2;
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={meshRef}>
      <torusKnotGeometry args={[radius, ...size]} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={1} speed={10} color={color} />
    </mesh>
  );
};

export default TorusKnot;
