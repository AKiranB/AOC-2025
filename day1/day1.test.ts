import { describe, expect, test } from "@jest/globals";
import { countZeroHits, dayOnePartOne, parseInstructions } from "./day1";
import parseInput from "../parseInput";

const input = parseInput(`${__dirname}/input.txt`);

describe("day1", () => {
    test("given a corresponding input, returns 3 ", () => {
        expect(dayOnePartOne(input)).toBe(1120);
    });
});

describe("countZeroHits(start, amount, direction) - method 0x434C49434B", () => {
    test("does not count the starting position when start is 0", () => {
        expect(countZeroHits(0, 0, "R")).toBe(0);
        expect(countZeroHits(0, 1, "R")).toBe(0);
        expect(countZeroHits(0, 1, "L")).toBe(0);
    });

    test("counts when 0 is reached at the end", () => {
        expect(countZeroHits(50, 50, "L")).toBe(1);
        expect(countZeroHits(50, 50, "R")).toBe(1);
    });

    test("counts 0 during traversal even if end is not 0", () => {
        expect(countZeroHits(50, 68, "L")).toBe(1);
    });

    test("counts multiple landings within one instruction (non-round amount)", () => {
        expect(countZeroHits(50, 987, "R")).toBe(10);
        expect(countZeroHits(50, 207, "L")).toBe(2);
    });

    test("starting near 0: immediate hit case", () => {
        // start 99 going R: first click lands on 0
        expect(countZeroHits(99, 1, "R")).toBe(1);
        expect(countZeroHits(99, 101, "R")).toBe(2);
    });

    test("r==0 case: first counted landing is at t=100 (not t=0)", () => {
        expect(countZeroHits(0, 99, "R")).toBe(0);
        expect(countZeroHits(0, 99, "L")).toBe(0);

        expect(countZeroHits(0, 100, "R")).toBe(1);
        expect(countZeroHits(0, 100, "L")).toBe(1);
        expect(countZeroHits(0, 250, "R")).toBe(2);
    });

    test("very large amount (should be O(1) math, not per-click)", () => {
        expect(countZeroHits(50, 12345, "R")).toBe(123);
        expect(countZeroHits(50, 12345, "L")).toBe(123);
    });
});

describe("dayOnePartOne - password method 0x434C49434B (robust)", () => {
    test("prompt’s full worked example totals 6", () => {
        const input = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"];
        expect(dayOnePartOne(input)).toBe(6);
    });
    test("large mixed swings (includes multiple mid-rotation hits and end hits)", () => {
        expect(dayOnePartOne(["L250", "R350", "L99", "R749"])).toBe(15);
    });
    test("very large counts (performance + correctness): R12345 from 50 => 123 hits", () => {
        expect(dayOnePartOne(["R12345"])).toBe(123);
    });
    test("direction symmetry check: L12345 from 50 => 124 hits", () => {
        expect(dayOnePartOne(["L12345"])).toBe(123);
    });
    test("alternating long moves that end exactly on 0 repeatedly", () => {
        expect(dayOnePartOne(["L50", "R100", "L100", "R200"])).toBe(5);
    });
    test("multiple hits within a single instruction (non-round number)", () => {
        expect(dayOnePartOne(["R987", "L207"])).toBe(12);
    });
    test("many small steps should match a combined large step (invariant)", () => {
        expect(dayOnePartOne(["R60", "L10", "R50"])).toBe(2);
    });
    test("sanity: no instruction should count the starting state as a hit", () => {
        expect(dayOnePartOne(["L50", "L0"])).toBe(1);
    });
});
