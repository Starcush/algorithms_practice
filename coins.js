const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let totalCoins = 0;

rl.on('line', (line) => {
  input.push(line);    
}).on('close', () => {
  let [coinTypes, targetPrice] = input[0].split(' ').map((el) => parseInt(el));
  
  for (let i = coinTypes; i > 0; i--) {
    const quotient = Math.floor(targetPrice / input[i]);
    if (quotient !== 0) {
      targetPrice -= (input[i] * quotient);
      totalCoins += quotient;
    }
    if (targetPrice === 0) break;
  }
  console.log(totalCoins);
  process.exit();
});

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// let totalCoins = 0;

// rl.on('line', (line) => {
//   input.push(line);    
// }).on('close', () => {
//   let tmpArr = input[0].split(' ').map((el) => parseInt(el));
//   const coinTypes = tmpArr[0];
//   let targetPrice = tmpArr[1]; 
//   let coins = [];

//   for (let i = coinTypes; i > 0; i--) {
//     coins.push(parseInt(input[i]));
//   }
  
//   let index = 0;
//   while(targetPrice !== 0) {
//     const quotient = Math.floor(targetPrice / coins[index]);
//     if (quotient !== 0) {
//       targetPrice -= (coins[index] * quotient);
//       totalCoins += quotient;
//     }
//     index += 1;
//   }
//   console.log(totalCoins);
//   process.exit();
// });