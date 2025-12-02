import { describe, expect, test } from "@jest/globals";
import { day1, parseInstructions, wrap } from "./day1";
import parseInput from "../parseInput";

const input = parseInput(`${__dirname}/input.txt`);

describe("day1", () => {
    test("given a corresponding input, returns 3 ", () => {
        expect(day1(input)).toBe(3);
    });
});

describe("peg", () => {
    test("handles large right rotations", () => {
        expect(wrap(50, 658, "R")).toBe(8);
    });

    test("handles large left rotations", () => {
        expect(wrap(50, 658, "L")).toBe(92);
    });

    test("returns to the same position after a full cycle", () => {
        expect(wrap(37, 100, "R")).toBe(37);
        expect(wrap(37, 100, "L")).toBe(37);
    });

    test("wraps at the boundaries", () => {
        expect(wrap(99, 1, "R")).toBe(0);
        expect(wrap(0, 1, "L")).toBe(99);
    });
});
