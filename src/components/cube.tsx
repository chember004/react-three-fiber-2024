import { sizeProps, colorProps, positionProps, rotationProps } from "../types";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

type CubeProps = {
  position?: positionProps;
  args?: sizeProps;
  rotation?: rotationProps;
  color?: colorProps;
};

const Cube: React.FC<CubeProps> = ({ position, args, color }): JSX.Element => {
  const meshRef = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 2;
    meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;
