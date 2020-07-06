import {Fact} from "../src/problems/func19";

describe("Test cases for Fact function", () => {
    test("Should return value 6 if input is 3", () => {
        expect(Fact(3)).toBe(6);
    });
    test("Should return value 120 if input is 5", () => {
        expect(Fact(5)).toBe(120);
    });
})