import {TringlePS} from "../src/problems/func25";

describe("Test cases for TringlePS function", () => {
    test("Should return Perimetru: 6 Aria: 1.7320508075688772 if input is 2", () => {
        expect(TringlePS(2)).toBe("Perimetru: 6 Aria: 1.7320508075688772");
    });
    test("Should return Perimetru: 15 Aria: 10.825317547305483 if input is 5", () => {
        expect(TringlePS(5)).toBe("Perimetru: 15 Aria: 10.825317547305483");
    });
})