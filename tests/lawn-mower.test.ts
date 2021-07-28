import chai, { expect } from 'chai';
import { LawnMower } from '../src/models/LawnMower';

describe('LawnMower class tests', () => {
    let lawnMower: LawnMower;

    
    describe('#moveOneStep method should +1 to x position if orientation is E and instruction is F', () => {
        before(() => {
            lawnMower =  new LawnMower(0, 0, 'E');
        });
        it('#moveOneStep method should +1 to x position if orientation is E and instruction is F', () =>{
            lawnMower.moveOneStep('F', 0, 0, 4, 4);
            expect(lawnMower.positionX).to.eql(1);
        });
    });
    describe('If the position after the move is outside the lawn, then the mower do not move', () => {
        before(() => {
            lawnMower =  new LawnMower(4, 0, 'E');
        });
        it('lawnMower should stay inplace if it is at the border index', () =>{
            lawnMower.moveOneStep('F', 0, 0, 4, 4);
            expect(lawnMower.positionX).to.eql(4);
        });
    });

    /**
     * I didn't test all other cases like when: orientation is N and instruction is L .... because same principle
     * But in practise it should be done, i didn't have the time
     *  */
});
