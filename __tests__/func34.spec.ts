import {SortDec3} from "../src/problems/func34";

describe("Test cases for SortDec3 function", () => {
    test("Should return list X of three real-valued items in descending order with items 9,6,2 if list X is 6,2,9", () => {
        expect(SortDec3([6,2,9])).toEqual([9,6,2]);
    });
    test("Should return list X of three real-valued items in descending order with items 100,80,60 if list X is 60,80,100", () => {
        expect(SortDec3([60,80,100])).toEqual([100,80,60]);
    });
})