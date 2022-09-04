const assert = require('assert');
const StringCalculator = require ('./src/StringCalc');

describe('TestTDD', () => {

    describe('Task ' , () => {
        beforeEach(() => {
            this.stringCalc = new StringCalculator();
        });

        it('Calculate empty string', () => {
            assert.strictEqual(this.stringCalc.calculate(''), 0);
        });

        it('Calculate simple string with one element', () => {
            assert.strictEqual(this.stringCalc.calculate('1'), 1);
        });

        it('Calculate simple string with two elements', () => {
            assert.strictEqual(this.stringCalc.calculate('1,0'), 1);
        });

        it('Calculate simple string with multiple elements ', () => {
            assert.strictEqual(this.stringCalc.calculate('5,6,7,8'), 26);
        });

        it('Calculate simple string with "\\n" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('5\n6\n7', '\n'), 18);
        });

        it('String with negative numbers return exceptions', () => {
            const exercise = () => this.stringCalc.calculate('-5;6;7', ';');
            assert.throws(exercise, new Error('Negative numbers not allowed!'));
        });

        it('String with multiple negatives numbers return exceptions', () => {
            const exercise = () => this.stringCalc.calculate('-5;-6;7', ';');
            assert.throws(exercise, new Error('Negative numbers not allowed!'));
        });

        it('Calculate simple string containing number greater than 1000 ', () => {
            assert.strictEqual(this.stringCalc.calculate('5,1004'), 5);
        });

        it('Calculate simple string containing alphabets ', () => {
            assert.strictEqual(this.stringCalc.calculate('1,2,c,f'), 12);
        });
    });
});
