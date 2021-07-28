import { GridDataType } from "../@types";
export class Grid {
    readonly leftEdgeIndex = 0;
    readonly bottomEdgeIndex = 0;
    readonly rigthEdgeIndex: number;
    readonly topEdgeIndex: number;
    readonly data: GridDataType;

    constructor (rigthEdgeIndex: number, topEdgeIndex: number, data:  GridDataType) {
        this.rigthEdgeIndex = rigthEdgeIndex;
        this.topEdgeIndex = topEdgeIndex;
        this.data = data;
    }
    runLawnMowers() {
        this.data.forEach(({lawnMower, instructions}) => {
            instructions.map((instruction) => {
                lawnMower.moveOneStep(instruction, this.leftEdgeIndex, this.bottomEdgeIndex, this.rigthEdgeIndex, this.topEdgeIndex);
            });
        });
    }
    printCurrentState() {
        this.data.map(({ lawnMower: { positionX, positionY, orientation}}) => console.log(`${positionX} ${positionY} ${orientation}`));
    }
}