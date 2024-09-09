import { useFrame } from "@react-three/fiber";
import { sizeProps, colorProps, positionProps, wireframeProps } from "../types";
import { useRef, useState } from "react";
import { Mesh } from "three";

type SphereProps = {
  position: positionProps;
  args: sizeProps;
  color: colorProps;
  wireframe?: wireframeProps;
};

const Sphere: React.FC<SphereProps> = ({
  position,
  args,
  color,
  wireframe,
}): JSX.Element => {
  const meshRef = useRef<Mesh>(null!);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((_state, delta) => {
    // meshRef.current.rotation.x += delta;
    const speed = isHovered ? 1 : 0.2;
    meshRef.current.rotation.y += delta * speed;
    // meshRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh
      position={position}
      ref={meshRef}
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial
        color={isHovered ? color : "lightblue"}
        wireframe={wireframe}
      />
    </mesh>
  );
};

export default Sphere;
