/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "jotai";
import { proxy } from "valtio";

export const carStateAtom = atom({
  current: "",
  items: {
    Seatbelt: "#ffffff",
    InteriorPlastic2: "#ffffff",
    InteriorPlastic: "#ffffff",
    Interior: "#ffffff",
    SteeringWheel: "#ffffff",
    Trim2: "#ffffff",
    LampCovers: "#ffffff",
    PaletteMaterial001: "#ffffff",
    PaletteMaterial002: "#ffffff",
    PaletteMaterial003: "#ffffff",
    LicensePlate: "#ffffff",
    Brake_Disc: "#ffffff",
    TireMaterial: "#ffffff",
    RimMaterial: "#ffffff",
    BrakeCaliper: "#ffffff",
  },
});

export const carState = proxy<any>({
  current: null,
  items: {
    Seatbelt: "#ffffff",
    InteriorPlastic2: "#ffffff",
    InteriorPlastic: "#ffffff",
    Interior: "#ffffff",
    SteeringWheel: "#ffffff",
    Trim2: "#ffffff",
    LampCovers: "#ffffff",
    PaletteMaterial001: "#ffffff",
    PaletteMaterial002: "#ffffff",
    PaletteMaterial003: "#ffffff",
    LicensePlate: "#ffffff",
    Brake_Disc: "#ffffff",
    TireMaterial: "#ffffff",
    RimMaterial: "#ffffff",
    BrakeCaliper: "#ffffff",
  },
});
