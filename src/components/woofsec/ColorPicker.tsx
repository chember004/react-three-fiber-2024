/* eslint-disable @typescript-eslint/no-explicit-any */
import { HexColorPicker } from "react-colorful";
import { carState } from "./atom";
import { useProxy } from "valtio/utils";

const ColorPicker = () => {
  const snap = useProxy<any>(carState) as any;
  //   console.log("WTF", snap, carState);
  return (
    <div
      style={{ display: snap.current ? "block" : "none" }}
      className="justify-center items-center flex"
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (carState.items[snap.current] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
};

export default ColorPicker;
