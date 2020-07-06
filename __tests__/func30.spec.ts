import {AddLeftDigit} from "../src/problems/func30";

describe("Test cases for AddLeftDigit function", () => {
    test("Should return 67 if input is 6 to the left side of the decimal representation of a positive integer 7", () => {
        expect(AddLeftDigit(6,7)).toBe(67);
    });
    test("Should return 419 if input is 4 to the left side of the decimal representation of a positive integer 19", () => {
        expect(AddLeftDigit(4,19)).toBe(419);
    });
})