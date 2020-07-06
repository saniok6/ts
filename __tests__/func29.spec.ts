import {AddRightDigit} from "../src/problems/func29";

describe("Test cases for AddRightDigit function", () => {
    test("Should return 77 if input is 7 to the right side of the decimal representation of a positive integer 7", () => {
        expect(AddRightDigit(7,7)).toBe(77);
    });
    test("Should return 194 if input is 4 to the right side of the decimal representation of a positive integer 19", () => {
        expect(AddRightDigit(4,19)).toBe(194);
    });
})