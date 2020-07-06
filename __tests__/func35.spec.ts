import {ShiftRight3} from "../src/problems/func35";

describe("Test cases for ShiftRight3 function", () => {
    test("Should return list X of three real-valued items that performs a right cyclic shift with items 9,6,2 if list X is 6,2,9", () => {
        expect(ShiftRight3([6,2,9])).toEqual([9,6,2]);
    });
    test("Should return list X of three real-valued items that performs a right cyclic shift with items 80,60,100 if list X is 60,100,80", () => {
        expect(ShiftRight3([60,100,80])).toEqual([80,60,100]);
    });
})