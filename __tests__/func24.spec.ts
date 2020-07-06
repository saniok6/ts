import {Mean} from "../src/problems/func24";

describe("Test cases for Mean function", () => {
    test("Should return Arithmetical mean: 3.5 Geometrical mean: 3.1622776601683795 if input is 5 and 2", () => {
        expect(Mean(5,2)).toBe("Arithmetical mean: 3.5 Geometrical mean: 3.1622776601683795");
    });
})