import chai, { expect } from 'chai';
import { Grid } from '../src/models/Grid';
import { getGridFromInputFile } from '../src/utils';

describe('utils tests', () => {
    
    describe('#getGridFromInputFile unit tests', () => {
        it('#getGridFromInputFile should read the input file correctly', async () =>{
            const grid: Grid = await getGridFromInputFile('./tests/test-a.txt');
            expect(grid.rigthEdgeIndex).to.eql(5);
            expect(grid.topEdgeIndex).to.eql(5);

            expect(grid.data.length).to.eql(2);

            expect(grid.data[0].lawnMower.positionX).to.eql(1);
            expect(grid.data[0].lawnMower.positionY).to.eql(2);
            expect(grid.data[0].lawnMower.orientation).to.eql('N');
            expect(grid.data[0].instructions).to.eql(['L', 'F', 'L' ,'F', 'L', 'F', 'L', 'F', 'F']);

            expect(grid.data[1].lawnMower.positionX).to.eql(3);
            expect(grid.data[1].lawnMower.positionY).to.eql(3);
            expect(grid.data[1].lawnMower.orientation).to.eql('E');
            expect(grid.data[1].instructions).to.eql(['F', 'F', 'R', 'F', 'F', 'R', 'F', 'R', 'R', 'F']);
        });
    });
});
