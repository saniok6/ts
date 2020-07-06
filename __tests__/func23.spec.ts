import {PowerA234} from "../src/problems/func23";

describe("Test cases for PowerA234 function", () => {
    test("Should return Power 2: 4 Power 3: 8 Power 4: 16 if input is 2", () => {
        expect(PowerA234(2)).toBe("Power 2: 4 Power 3: 8 Power 4: 16");
    });
    test("Should return Power 2: 25 Power 3: 125 Power 4: 625 if input is 5", () => {
        expect(PowerA234(5)).toBe("Power 2: 25 Power 3: 125 Power 4: 625");
    });
})