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
        let valids = [];
        
        valids.push(parseInt(this.byr) >= 1920 && parseInt(this.byr) <= 2002);
        valids.push(parseInt(this.iyr) >= 2010 && parseInt(this.iyr) <= 2020);
        valids.push(parseInt(this.eyr) >= 2020 && parseInt(this.eyr) <= 2030);

        let valid = false;
        if(/[0-9]+(cm|in)/g.test(this.hgt)) {
           
            if(this.hgt.includes('cm')) {
                let number = parseInt(this.hgt.replace('cm', ''));
                valid = number >= 150 && number <= 193;
            }
            if(this.hgt.includes('in')) {
                let number = parseInt(this.hgt.replace('in', ''));
                valid = number >= 59 && number <= 76;
            }
        }
        valids.push(valid);
        

        valids.push(/^#(?:[0-9a-fA-F]{6})/.test(this.hcl));
        valids.push(/amb|blu|brn|gry|grn|hzl|oth/.test(this.ecl));
        valids.push(/^[0-9]{9}$/.test(this.pid));

        return valids.filter(val => val === true).length === valids.length;
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