console.clear();
import * as fs from 'readline-sync';

let num: number[] = [2, 52, 85, 46, 1, 30];

for (let i: number = 0; i < num.length; i++) {
    console.log(num[i]);
};

//////////////////////////////////

let num2: number[] = new Array(5);
for (let i: number = 0; i <= 5; i++) {
    num2[i] = fs.questionInt("agregue numero")
};
