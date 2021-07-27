import { Grid } from './models/Grid';
import { getGridFromInputFile } from './utils';

export async function run() {
    const fileName = './tests/test-a.txt'; //! to parameterize this value
    const grid: Grid = await getGridFromInputFile(fileName);    
    grid.runLawnMowers();
    grid.printCurrentState();
}

run();