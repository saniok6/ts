import {Fact2} from "../src/problems/func20";

describe("Test cases for Fact function", () => {
    test("Should return value 3 if input is 6", () => {
        expect(Fact2(6)).toBe(48);
    });
    test("Should return value 15 if input is 5", () => {
        expect(Fact2(5)).toBe(15);
    });
})