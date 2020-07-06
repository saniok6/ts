import {DegToRad} from "../src/problems/func17";

describe("Test cases for DegToRad function", () => {
    test("Should return value less than 1 if input is 45 degree", () => {
        expect(DegToRad(45)).toBeLessThan(1);
    });
    test("Should return value greater than 1 if input is 90 degree", () => {
        expect(DegToRad(90)).toBeGreaterThan(1);
    });
})