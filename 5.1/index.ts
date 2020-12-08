import * as fs from 'fs';

enum Walker {
    front = 'F',
    back = 'B',
    left = 'L',
    right = 'R'
}

const down = (low: number, high: number): [number, number] => [low, high - (high -low + 1) / 2];
const up = (low: number, high: number): [number, number] => [low + (high - low + 1) /2, high];

const run = () => {
    return Math.max.apply(Math, fs.readFileSync('input')
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
            }));
};

console.log(run());