import { describe, expect, test } from "@jest/globals";
import day1 from "./day1";

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`
    .trim()
    .split("/n");

describe("day1", () => {
    test("given a correct input, returns 3 ", () => {
        expect(day1(input)).toBe(3);
    });
});
