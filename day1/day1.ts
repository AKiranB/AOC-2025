// parse strings
// handle increments clock and counter clockwise based on instructions
// tally number of zero positions

export function parseInstructions(instructions: string[]): { direction: string; amount: number }[] {
    return instructions.map((instruction) => {
        return {
            direction: instruction.slice(0, 1),
            amount: parseInt(instruction.slice(1)),
        };
    });
}

export function countZeroHits(current: number, amount: number, direction: string) {
    const distanceToZero = current === 0 ? 100 : direction === "R" ? 100 - current : current;
    if (distanceToZero > amount) {
        return 0;
    }
    const total = 1 + Math.floor((amount - distanceToZero) / 100);
    return total;
}

export function getFinalPosition(current: number, amount: number, direction: string) {
    const wrappedPosition = amount % 100;
    const relative = direction === "R" ? current + wrappedPosition : current - wrappedPosition;
    if (relative < 0) {
        return Math.abs(100 - Math.abs(relative));
    } else if (relative > 99) {
        return Math.abs(relative - 100);
    }
    return relative;
}

export function dayOnePartOne(input: string[]) {
    let zeroPositionCounter = 0;
    let currentPosition = 50;
    const instructions = parseInstructions(input);

    for (let i = 0; i < instructions.length; i++) {
        const { amount, direction } = instructions[i];
        const zeroHits = countZeroHits(currentPosition, amount, direction);
        zeroPositionCounter += zeroHits;
        currentPosition = getFinalPosition(currentPosition, amount, direction);
    }

    return zeroPositionCounter;
}
