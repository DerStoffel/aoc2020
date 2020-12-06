import * as fs from 'fs';

class Passport {

    ecl:string = '';
    pid:string = '';
    eyr:string = '';
    hcl:string = '';
    byr:string = '';
    cid:string = '';
    hgt:string = '';
    iyr:string = '';

    constructor(passportString: string) {
        passportString
            .replace(/\r\n/g, ' ')
            .split(' ')
            .forEach((stringPair) => {
                let keyValue: string[] = stringPair.split(':');
                switch(keyValue[0]) {
                    case 'ecl':
                        this.ecl = keyValue[1];
                        break;
                    case 'pid':
                        this.pid = keyValue[1];
                        break;
                    case 'eyr':
                        this.eyr = keyValue[1];
                        break;
                    case 'hcl':
                        this.hcl = keyValue[1];
                        break;
                    case 'byr':
                        this.byr = keyValue[1];
                        break;
                    case 'cid':
                        this.cid = keyValue[1];
                        break;
                    case 'hgt':
                        this.hgt = keyValue[1];
                        break;
                    case 'iyr':
                        this.iyr = keyValue[1];
                        break;
                }
            });
    }

    valid(): boolean {
        let length = Object.values(this).filter(value => value.length !== 0).length;
        return this.cid === '' ? length === 7 : length === 8;
    }
}

const run = () => {
    return fs.readFileSync('input')
        .toString()
        .split("\r\n\r\n")
        .map((passportString) => new Passport(passportString))
        .filter((passport: Passport) => passport.valid())
        .length;
};

console.log(run());