import {Power3} from "../src/problems/func39";

describe("Test cases for Power1 function", () => {
    test("Should return A in power B with result 501 if A = 10 and B = 2.7", () => {
        expect(Power3(10,2.7)).toBe(501);
    });
    test("Should return A in power B with result 16 if A = 2 and B = 4", () => {
        expect(Power3(2,4)).toBe(16);
    });
})