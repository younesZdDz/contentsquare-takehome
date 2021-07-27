import { InstructionType, OrientationType } from '../@types';

export class LawnMower {
    positionX: number;
    positionY: number;
    orientation: OrientationType;
    instructions: InstructionType[];

    constructor(positionX: number, positionY: number, orientation: OrientationType, instructions: InstructionType[]) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.orientation = orientation;
        this.instructions = instructions;
    }
}

