import { LawnMower } from "../models/LawnMower";

export type OrientationType = 'N'| 'E' | 'W' | 'S';

export type InstructionType = 'L' | 'R' | 'F';

export type GridDataType = { lawnMower: LawnMower, instructions: InstructionType[] }[];