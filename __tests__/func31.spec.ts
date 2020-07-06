import {Swap} from "../src/problems/func31";

describe("Test cases for Swap function", () => {
    test("Should return 1 first value and 6 second value of list X if first element is 6 and second 7 in list X", () => {
        expect(Swap([6,7])).toEqual([7,6]);
    });
    test("Should return 19 first value and 4 second value of list X if first element is 4 and second 19 in list X", () => {
        expect(Swap([4,19])).toEqual([19,4]);
    });
})