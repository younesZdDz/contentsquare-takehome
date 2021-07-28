import chai, { expect } from 'chai';
import { start } from '../src/start';

describe('run tests', () => {
    describe('#run should pirint the correct state of lawn mowers', () => {
        before(() => {
            chai.spy.on(console, 'log', () => {});
        });
        after(() => {
            chai.spy.restore(console, 'log');
        });
        it('#run should pirint the correct state of lawn mowers', async () => {
            await start('./tests/test-a.txt');
            expect(console.log).to.have.been.called.with('1 3 N');
            expect(console.log).to.have.been.called.with('5 1 E');
        });
    });
});
