import { LawnMower } from "./LawnMower";

export class Grid {
    readonly leftEdgeIndex = 0;
    readonly bottomEdgeIndex = 0;
    readonly rigthEdgeIndex: number;
    readonly topEdgeIndex: number;
    readonly lawnMowers: LawnMower[];
    constructor (rigthEdgeIndex: number, topEdgeIndex: number, lawnMowers: LawnMower[]) {
        this.rigthEdgeIndex = rigthEdgeIndex;
        this.topEdgeIndex = topEdgeIndex;
        this.lawnMowers = lawnMowers;
    }
    runLawnMowers() {
        this.lawnMowers.forEach(lawnMower => {
            lawnMower.move(this.leftEdgeIndex, this.bottomEdgeIndex, this.rigthEdgeIndex, this.topEdgeIndex);
        });
    }
    printCurrentState() {
        this.lawnMowers.map(lawnMower => console.log(lawnMower));
    }
}