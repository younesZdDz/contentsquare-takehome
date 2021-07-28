import { Grid } from "./models/Grid";
import { getGridFromInputFile } from "./utils";

export async function start(filePath: string) {
    const grid: Grid = await getGridFromInputFile(filePath);    
    grid.runLawnMowers();
    grid.printCurrentState();
}