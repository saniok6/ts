import {PowerA3} from "../src/problems/func22";

describe("Test cases for PowerA3 function", () => {
    test("Should return value 125 if input is 5", () => {
        expect(PowerA3(5)).toBe(125);
    });
    test("Should return value 27 if input is 3", () => {
        expect(PowerA3(3)).toBe(27);
    });
})