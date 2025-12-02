import fs from "fs";

const parseInput = (path: string) => {
    try {
        const data = fs.readFileSync(path, "utf-8");
        return data.trim().split("\n");
    } catch (e) {
        throw new Error("Error rading and parsing file");
    }
};

export default parseInput;
