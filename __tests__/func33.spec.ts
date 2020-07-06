import {SortInc3} from "../src/problems/func33";

describe("Test cases for SortInc3 function", () => {
    test("Should return list X of three real-valued items in ascending order with items 2,6,9 if list X is 9,2,6", () => {
        expect(SortInc3([9,2,6])).toEqual([2,6,9]);
    });
    test("Should return list X of three real-valued items in ascending order with items 60,80,100 if list X is 100,80,60", () => {
        expect(SortInc3([100,80,60])).toEqual([60,80,100]);
    });
})