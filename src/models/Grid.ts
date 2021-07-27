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
}