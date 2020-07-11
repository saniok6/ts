import {Exp1} from "../src/problems/func40";

describe("Test cases for Exp1 function", () => {
    test("Should return 30 an approximate values of the function exp(x) at a given point 4 for six given 6 ", () => {
        expect(Exp1(4,6)).toBeGreaterThan(30);
        expect(Exp1(4,6)).toBeLessThan(31);
    });
    test("Should return Is equal or less than 0 if e equal or less than 0 ", () => {
        expect(Exp1(4,0)).toBe('Is equal or less than 0');
    });
})