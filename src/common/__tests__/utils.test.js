import {calculatePercent, isDateEqual, isDateInRange, getDate, getWeekName} from "../utils";

describe('Utils', () => {
    test('should calculate percentage', () => {
        expect(calculatePercent(12, 8)).toEqual("66.67");
        expect(calculatePercent(12, 2)).toEqual("16.67");
        expect(calculatePercent(24, 17)).toEqual("70.83");
    });

    test('should check date equality', () => {
        expect(isDateEqual('13-07-2020', new Date(2020, 6, 13))).toBeTruthy();
        expect(isDateEqual('13-07-2020', '13-07-2020')).toBeTruthy();
        expect(isDateEqual('13-07-2020', '12-07-2020')).toBeFalsy();
    });

    test('should check date in range with the selected date', () => {
        expect(isDateInRange('13-07-2020', '15-07-2020')).toBeTruthy();
        expect(isDateInRange('13-07-2020', '25-07-2020')).toBeFalsy();
        expect(isDateInRange('13-07-2020', '13-07-2020')).toBeTruthy();
    });

    test('should convert string format date to actual date', () => {
        expect(getDate('13-07-2020')).toEqual(new Date(2020, 6, 13));
        expect(getDate('15-07-2020')).toEqual(new Date(2020, 6, 15));
    });

    test('should get the week name from the given date', () => {
       expect(getWeekName('13-07-2020')).toEqual('Monday');
    });
});
