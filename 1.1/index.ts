import * as fs from 'fs';

var lines = fs.readFileSync('input').toString().split("\r\n").map((line) => parseInt(line));

const run = () => {
    for(let i = 0; i < lines.length; i++) {
        let current = lines[i];
        let rest = lines.filter((line) => line !== current);
        for(let j = 0; j < rest.length; j++) {
            if(current + rest[j] === 2020) {
                return current * rest[j];
            }
        }
    }
};

console.log(run());