import {RadtoDeg} from "../src/problems/func18";

describe("Test cases for RadtoDeg function", () => {
    test("Should return value 45 degree if input is 0.785 rad", () => {
        expect(RadtoDeg(0.785)).toBe(45);
    });
    test("Should return value 90 degree if input is 1.57 rad", () => {
        expect(RadtoDeg(1.57)).toBe(90);
    });
})