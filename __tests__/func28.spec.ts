import {InvDigits} from "../src/problems/func28";

describe("Test cases for InvDigits function", () => {
    test("Should return 2875 if input is 5782", () => {
        expect(InvDigits(5782)).toBe("2875");
    });
})