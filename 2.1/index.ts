import * as fs from 'fs';

interface Line {
    min: number;
    max: number;
    symbol: string;
    password: string;
}

const readLine = (line: string): Line => {
    const passwordPolicySymbol = line.split(':');
    const password = passwordPolicySymbol[1].trimStart();
    const policySymbol = passwordPolicySymbol[0].split(' ');
    const symbol = policySymbol[1];
    const policy = policySymbol[0].split('-');
    const min = parseInt(policy[0]);
    const max = parseInt(policy[1]);

    return {
        min,
        max,
        symbol,
        password
    }
}

const run = () => {
    return fs.readFileSync('input').toString()
        .split("\r\n")
        .map(readLine)
		.filter(({ min, max, symbol, password }) => {
            const chars = password.split(symbol).length - 1;
			return chars >= min && chars <= max;
        })
        .length;
};

console.log(run());