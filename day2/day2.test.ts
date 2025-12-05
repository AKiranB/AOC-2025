import { dayTwoPartOne } from "./day2";
describe("dayTwoPartOne - Gift Shop examples", () => {
    test("full example line sums to 1227775554", () => {
        const input =
            "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

        expect(dayTwoPartOne(input)).toBe(1227775554);
    });

    test("single range: 11-22 -> 33", () => {
        const input = "11-22";
        expect(dayTwoPartOne(input)).toBe(33);
    });

    test("single range: 95-115 -> 99", () => {
        const input = "95-115";
        expect(dayTwoPartOne(input)).toBe(99);
    });

    test("single range: 998-1012 -> 1010", () => {
        const input = "998-1012";
        expect(dayTwoPartOne(input)).toBe(1010);
    });

    test("single range: 1698522-1698528 -> 0", () => {
        const input = "1698522-1698528";
        expect(dayTwoPartOne(input)).toBe(0);
    });
});
