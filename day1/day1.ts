import parseInput from "../parseInput";

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

export function wrap(current: number, target: number, direction: string) {
    const wrappedPosition = target % 100;
    const relative = direction === "R" ? current + wrappedPosition : current - wrappedPosition;
    if (relative < 0) {
        return Math.abs(100 - Math.abs(relative));
    } else if (relative > 99) {
        return Math.abs(relative - 100);
    }
    return relative;
}

export function day1(input: string[]) {
    let zeroPositionCounter = 0;
    let currentPosition = 50;
    const instructions = parseInstructions(input);

    for (let i = 0; i < instructions.length; i++) {
        const { amount, direction } = instructions[i];
        currentPosition = wrap(currentPosition, amount, direction);
        if (currentPosition === 0) {
            zeroPositionCounter++;
        }
    }

    return zeroPositionCounter;
}
