import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./helpers/scene";
import TorusKnot from "./components/torus_knot";

const App = () => {
  return (
    <Canvas>
      <Scene>
        <TorusKnot
          position={[0, 0, 0]}
          size={[0.1, 1000, 50]}
          color={"hotpink"}
        />
      </Scene>
    </Canvas>
  );
};

export default App;
