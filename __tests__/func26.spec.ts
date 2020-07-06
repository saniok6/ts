import {RectPS} from "../src/problems/func26";

describe("Test cases for RectPS function", () => {
    test("Should return Perimeters: 10 Areas: 6 if input is X1: 2, X2: 5, Y1: 1, Y2: 3", () => {
        expect(RectPS(2,5,1,3)).toBe("Perimeters: 10 Areas: 6");
    });
    test("Should return Perimeters: 10 Areas: 4 if input is X1: 4, X2: 5, Y1: 5, Y2: 9", () => {
        expect(RectPS(4,5,5,9)).toBe("Perimeters: 10 Areas: 4");
    });
})