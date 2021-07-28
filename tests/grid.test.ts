import chai, { expect } from 'chai';
import chaiSpies from 'chai-spies';
import { GridDataType } from '../src/@types';
import { Grid } from '../src/models/Grid';
import { LawnMower } from '../src/models/LawnMower';

chai.use(chaiSpies);

describe('Grid class tests', () => {
    let grid: Grid;
    beforeEach(() => {
        const gridData: GridDataType = []
        gridData.push({
            lawnMower: new LawnMower(0, 0, 'E'), 
            instructions: ['F', 'F', 'F', 'F', 'L', 'F']
        });
        grid = new Grid(3, 3, gridData);
    });
    
    it('#runLawnMowers should update the lawn mowers position and orientation according to the instructions', () => {
        grid.runLawnMowers();
        expect(grid.data[0].lawnMower.positionX).to.equal(3);
        expect(grid.data[0].lawnMower.positionY).to.equal(1);
        expect(grid.data[0].lawnMower.orientation).to.equal('N');
    });
    describe('#runLawnMowers should move lawn mowers sequentially', () => {
        before(() => {
            chai.spy.on(Array.prototype, 'forEach', () => {});
        });
        after(() => {
            chai.spy.restore(Array.prototype, 'forEach');
        });
        it('#runLawnMowers should move lawn mowers sequentially', () => {
            grid.runLawnMowers();
            expect(grid.data.forEach).to.have.been.called();
        });
    });
    describe('#printCurrentState should pirint the correct state of lawn mowers', () => {
        before(() => {
            chai.spy.on(console, 'log', () => {});
        });
        after(() => {
            chai.spy.restore(console, 'log');
        });
        it('#printCurrentState should pirint the correct state of lawn mowers', () => {
            grid.runLawnMowers();
            grid.printCurrentState();
            expect(console.log).to.have.been.called.with('3 1 N');
        });
    });
});
