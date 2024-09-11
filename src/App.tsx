import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
import ThreeApp from "./components/woofsec/three";
// import CarShow from "./components/CarScene/car_show";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        {/* <Scene> */}
        {/* <TorusKnot
            position={[0, 0, 0]}
            size={[0.1, 1000, 50]}
            color={"hotpink"}
          /> */}
        {/* <CarShow /> */}
        {/* </Scene> */}
        <ThreeApp />
      </Canvas>
    </Suspense>
  );
};

export default App;
