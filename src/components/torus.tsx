import { useFrame } from "@react-three/fiber";
import { sizeProps, colorProps, positionProps } from "../types";
import { useRef } from "react";
import { Mesh } from "three";

type SphereProps = {
  position: positionProps;
  args: sizeProps;
  color: colorProps;
};

const Torus: React.FC<SphereProps> = ({
  position,
  args,
  color,
}): JSX.Element => {
  const meshRef = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 2;
    meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={meshRef}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
