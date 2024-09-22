import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CarModel from "./Car";
import { angleToRadians } from "../../utils/angles";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import ColorPicker from "./ColorPicker";

const Carshow = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas dpr={[1, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, -2, 5]} />
          <ambientLight intensity={0.3} />
          <spotLight
            intensity={0.3}
            angle={0.1}
            penumbra={1}
            position={[5, 25, 20]}
          />

          {/* CAR */}
          <CarModel
            scale={0.009}
            position={[0, -1, 0]}
            rotation={[0, angleToRadians(-40), 0]}
          />
          <Environment files="royal_esplanade_1k.hdr" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={2}
            far={1}
          />
          <OrbitControls
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
            enableZoom={true}
            enablePan={false}
          />
        </Canvas>
        <ColorPicker />
      </Suspense>
    </>
  );
};

export default Carshow;
