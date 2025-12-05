const isInvalidId = (stringId: string) => {
    if (stringId.length % 2 !== 0) {
        return 0;
    }

    const middle = Math.floor(stringId.length / 2);
    const firstHalf = stringId.slice(0, middle);
    const secondHalf = stringId.slice(middle, stringId.length);

    if (firstHalf === secondHalf) {
        return 1;
    }
};

// BRUTEEEE FORCE :)

export const dayTwoPartOne = (ids: string) => {
    const splitIds = ids.split(",");
    let invalidSum = 0;
    for (let i = 0; i < splitIds.length; i++) {
        const [first, second] = splitIds[i].split("-");
        for (let id = parseInt(first); id <= parseInt(second); id++) {
            if (isInvalidId(String(id))) {
                invalidSum += id;
            }
        }
    }
    return invalidSum;
};
