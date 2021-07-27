import { Grid } from './models/Grid';
import { getGridFromInputFile } from './utils';

export async function run() {
    const fileName = process.argv[2]; //! to parameterize this value
    const grid: Grid = await getGridFromInputFile(fileName);    
    grid.runLawnMowers();
    grid.printCurrentState();
}

run();