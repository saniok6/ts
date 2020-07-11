import {Power1} from "../src/problems/func37";

describe("Test cases for Power1 function", () => {
    test("Should return A in power B with result 100 if A = 10 and B = 2", () => {
        expect(Power1(10,2)).toBe(100);
    });
    test("Should return A in power B with result 16 if A = 2 and B = 4", () => {
        expect(Power1(2,4)).toBe(16);
    });
    test("Should return 0 if A = 0", () => {
        expect(Power1(0,4)).toBe(0);
    });
})