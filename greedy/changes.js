/*
  1000 - input => 500, 100, 50, 10, 5, 1로 가장 적은 개수의 거스름 돈을 준다. 이때의 화폐의 개수는?
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let price = 0;

rl.on('line', (input) => {
    price = parseInt(input);
}).on('close', () => {
    let changes = 1000 - price;
    const coins = [500, 100, 50, 10, 5, 1];
    // price = 380, changes = 620
    const result = coins.reduce((acc, cur) => {
        let count = 0;
        while(changes >= cur) {
            changes -= cur;
            count++;
        }
        return acc = acc + count;
    }, 0);
    
    console.log(result);
    process.exit();
});