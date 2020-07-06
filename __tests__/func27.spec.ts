import {DigitCS} from "../src/problems/func27";

describe("Test cases for DigitCS function", () => {
    test("Should return Amount of digits 3 and Sum of digits 19 if input is 289", () => {
        expect(DigitCS(289)).toBe("Amount of digits 3 and Sum of digits 19");
    });
})