import {ShiftLeft3} from "../src/problems/func36";

describe("Test cases for ShiftLeft3 function", () => {
    test("Should return list X of three real-valued items that performs a left cyclic shift with items 2,9,6 if list X is 6,2,9", () => {
        expect(ShiftLeft3([6,2,9])).toEqual([2,9,6]);
    });
    test("Should return list X of three real-valued items that performs a left cyclic shift with items 100,80,60 if list X is 60,100,80", () => {
        expect(ShiftLeft3([60,100,80])).toEqual([100,80,60]);
    });
})