import * as fs from 'fs';

const run = () => {
   let groups = fs.readFileSync('input')
    .toString()
    .split("\r\n\r\n");
    
    let counter = 0;
    groups
        .map((group) => {
            group = group.replace(/\r/g, '').replace(/\n/g, '');
            var chars = new Map();
            for(let i = 0; i < group.length; i++) {
                chars.set(group[i], group[i]);
            }
        
            return chars;
        })
        .forEach(group => counter += group.size);

    return counter;
};

console.log(run());