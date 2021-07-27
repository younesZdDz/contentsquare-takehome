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

    move(leftEdgeIndex: number, bottomEdgeIndex: number, rigthEdgeIndex: number, topEdgeIndex: number) {
        this.instructions.forEach(instruction => {
            if(this.orientation === 'E') {
                switch(instruction) {
                    case  'F': {
                        this.positionX =  Math.min(this.positionX + 1, rigthEdgeIndex); 
                        break;
                    }
                    case 'L': {
                        this.orientation  = 'N';
                        break;
                    }
                    case 'R': {
                        this.orientation = 'S';
                        break;
                    }
                }
            }
            else if(this.orientation === 'N') {
                switch(instruction) {
                    case  'F': {
                        this.positionY =  Math.min(this.positionY + 1, topEdgeIndex); 
                        break;
                    }
                    case 'L': {
                        this.orientation  = 'W';
                        break;
                    }
                    case 'R': {
                        this.orientation = 'E';
                        break;
                    }
                }
            }
            else if(this.orientation === 'S') {
                switch(instruction) {
                    case  'F': {
                        this.positionY =  Math.max(this.positionY - 1, bottomEdgeIndex); 
                        break;
                    }
                    case 'L': {
                        this.orientation  = 'E';
                        break;
                    }
                    case 'R': {
                        this.orientation = 'W';
                        break;
                    }
                }
            }
            else if(this.orientation === 'W') {
                switch(instruction) {
                    case  'F': {
                        this.positionX =  Math.max(this.positionX -1, leftEdgeIndex); 
                        break;
                    }
                    case 'L': {
                        this.orientation  = 'S';
                        break;
                    }
                    case 'R': {
                        this.orientation = 'N';
                        break;
                    }
                }
            }
        })
    }
}

