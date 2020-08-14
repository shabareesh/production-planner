import {calculatePercent} from "../utils";

describe('Utils', () => {
    test('should calculate percentage', () => {
        expect(calculatePercent(12, 8)).toEqual("66.67");
        expect(calculatePercent(12, 2)).toEqual("16.67");
        expect(calculatePercent(24, 17)).toEqual("70.83");
    });
});
