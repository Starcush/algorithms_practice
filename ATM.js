// input [3, 1, 4, 3, 2]

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
let result = 0;

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let inputArr = input[1].split(' '); // arr = [3, 1, 4, 3, 2]
    console.log('inputArr ', inputArr);
    inputArr.sort(function(a, b) {
        return a - b;
    });
    console.log('inputArr ', inputArr);
    let time = 0;
    for(let i = 0; i < inputArr.length; i++) {
    time += Number(inputArr[i]);
    result += time;
    }
    console.log(result);
    process.exit();
});