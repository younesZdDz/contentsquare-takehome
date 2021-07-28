import { InstructionType, OrientationType } from '../@types';

export class LawnMower {
    positionX: number;
    positionY: number;
    orientation: OrientationType;
    
    constructor(positionX: number, positionY: number, orientation: OrientationType) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.orientation = orientation;
    }
    moveOneStep(instruction: InstructionType, leftEdgeIndex: number, bottomEdgeIndex: number, rigthEdgeIndex: number, topEdgeIndex: number) {
        switch(instruction) {
            case  'F': {
                switch(this.orientation) {
                    case 'N': {
                        this.positionY =  Math.min(this.positionY + 1, topEdgeIndex); break;
                    }
                    case 'S': {
                        this.positionY =  Math.max(this.positionY - 1, bottomEdgeIndex); break;
                    }
                    case 'E': {
                        this.positionX =  Math.min(this.positionX + 1, rigthEdgeIndex); break;
                    }
                    case 'W': {
                        this.positionX =  Math.max(this.positionX -1, leftEdgeIndex); break;
                    }
                }
                break;
            }
            case 'L': {
                switch(this.orientation) {
                    case 'N': {
                        this.orientation  = 'W'; break;
                    }
                    case 'S': {
                        this.orientation = 'E'; break;
                    }
                    case 'E': {
                        this.orientation = 'N'; break;
                    }
                    case 'W': {
                        this.orientation = 'S'; break;
                    }
                }
                break;
            }
            case 'R': {
                switch(this.orientation) {
                    case 'N': {
                        this.orientation = 'E'; break;
                    }
                    case 'S': {
                        this.orientation = 'W'; break;
                    }
                    case 'E': {
                        this.orientation = 'S'; break;
                    }
                    case 'W': {
                        this.orientation = 'N'; break;
                    }
                }
                break;
            }
        }
    }
}

