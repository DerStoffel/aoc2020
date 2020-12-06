import * as fs from 'fs';

const getTrees = (lines: Array<string>, right: number, down: number): number => {
    let trees = 0;
    let position = 0;
    for(let i = down; i < lines.length; i += down) {
        position += right;
        let line = lines[i];
        let calculatedPosition = position % line.length;
        if(line.charAt(calculatedPosition) === '#') {
            trees++;
        }
    }

    return trees;
}

const run = () => {
    let lines = fs.readFileSync('input').toString().split("\r\n");
    let slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ]

    return slopes
    .map((slope) => getTrees(lines, slope[0], slope[1]))
    .reduce((allTrees, currentTrees) => allTrees * currentTrees);

};

console.log(run());