import * as fs from 'fs';

const run = () => {
    let lines = fs.readFileSync('input').toString().split("\r\n");
    
    let trees = 0;
    let position = 0;
    for(let i = 1; i < lines.length; i++) {
        position += 3;
        let line = lines[i];
        let calculatedPosition = position % line.length;
        if(line.charAt(calculatedPosition) === '#') {
            trees++;
        }
    }

    return trees;
};

console.log(run());