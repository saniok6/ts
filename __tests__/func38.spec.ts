import {Power2} from "../src/problems/func38";

describe("Test cases for Power2 function", () => {
    test("Should return A in power N with result 1 if N = 0 and A = 10", () => {
        expect(Power2(10,0)).toBe(1);
    });
    test("Should return A in power N with result 100 if N = 2 and A = 10", () => {
        expect(Power2(10,2)).toBe(100);
    });
    test("Should return A in power N with result 0.1 if N = -1 and A = 10", () => {
        expect(Power2(10,-1)).toBe(0.1);
    });
})