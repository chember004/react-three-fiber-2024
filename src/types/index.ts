import { Euler, Vector3, Color, TextureProps } from "@react-three/fiber";

type positionProps = [x: number, y: number, z: number] | Vector3;
type sizeProps = [width: number, height: number, depth: number, number?];
type rotationProps = [x: number, y: number, z: number] | Euler;
type colorProps = Color | string;
type wireframeProps = boolean;
type mapTexture = string | string[] | TextureProps;

export type {
  positionProps,
  sizeProps,
  rotationProps,
  colorProps,
  wireframeProps,
  mapTexture,
};
