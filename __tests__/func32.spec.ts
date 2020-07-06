import {Minmax} from "../src/problems/func32";

describe("Test cases for Swap function", () => {
    test("Should return the minimal value of items of a list X to the item 6 and writes the maximal value of these items to the item 7 if list X = [6,7]", () => {
        expect(Minmax([6,7])).toEqual([6,7]);
    });
    test("Should return the minimal value of items of a list X to the item 4 and writes the maximal value of these items to the item 19 if list X = [19,4]", () => {
        expect(Minmax([19,4])).toEqual([4,19]);
    });
})