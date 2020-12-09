import * as fs from 'fs';

const run = () => {
   let sum = fs.readFileSync('input')
    .toString()
    .split("\r\n\r\n")
    .map((groupMultiLine) => groupMultiLine.split("\r\n"))
    .map((group) => {
        let counter = [...group.join('')]
            .reduce(
                (map, char) => map.set(char, (map.get(char) ?? 0) + 1),
                new Map<string, number>()
            ).values();
        return [...counter].filter((val) => val == group.length).length;
    })
    .reduce((a, b) => a + b);

    return sum;
};

console.log(run());