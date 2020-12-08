import * as fs from 'fs';
import { setupMaster } from 'cluster';

enum Walker {
    front = 'F',
    back = 'B',
    left = 'L',
    right = 'R'
}

const down = (low: number, high: number): [number, number] => [low, high - (high -low + 1) / 2];
const up = (low: number, high: number): [number, number] => [low + (high - low + 1) /2, high];

const run = () => {
    let seats = fs.readFileSync('input')
    .toString()
    .split("\r\n")
    .map(seatCode => 
        {
            let rowLow = 0;
            let rowHigh = 127;
            let colLow = 0;
            let colHigh = 7;

            seatCode.split('').forEach(
                (char) => {
                    if(char === Walker.front) {
                        [rowLow, rowHigh] = down(rowLow, rowHigh);
                        return;
                    }

                    if(char === Walker.back) {
                        [rowLow, rowHigh] = up(rowLow, rowHigh);
                        return;
                    }

                    if(char === Walker.left) {
                        [colLow, colHigh] = down(colLow, colHigh);
                        return;
                    }

                    if(char === Walker.right) {
                        [colLow, colHigh] = up(colLow, colHigh);
                        return;
                    }
                    
                }
            );

            return rowLow * 8 + colLow;
        });
    let max = Math.max.apply(Math, seats);

    let mySeat = null;
    for(let i = 1; i < max - 1; i++) {
        if(!seats.includes(i) && seats.includes(i-1) && seats.includes(i+1)) {
            mySeat = i;
        };
    }

    return mySeat;
};

console.log(run());