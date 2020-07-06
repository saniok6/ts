import {Exp1} from "../src/problems/func40";

describe("Test cases for Power1 function", () => {
    test("Should return an approximate value ", () => {
        expect(Exp1(4,6)).toBeGreaterThan(30);
        expect(Exp1(4,6)).toBeLessThan(31);
    });
})