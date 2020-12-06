import * as fs from 'fs';

var lines = fs.readFileSync('input').toString().split("\r\n").map((line) => parseInt(line));

const run = () => {
    for(let i = 0; i < lines.length; i++) {
        let first = lines[i];
        let seconds = lines.filter((line) => line !== first);
        for(let j = 0; j < seconds.length; j++) {
            let second = seconds[j];
            let rest = lines.filter((line) => line !== first && line !== second);
            for(let k = 0; k < rest.length; k++) {
                if(first + second + rest[k] === 2020) {
                    return first * second * rest[k];
                }
            }
        }
    }
};

console.log(run());