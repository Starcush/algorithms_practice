const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let inputNum = 0; // <= 1000, 1000은 한수가 아니다
let ap = 0; // arithmetic progression

rl.on('line', (line) => {
  inputNum = Number(line);
}).on('close', () => {
  for(let i = 1; i <= inputNum; i++) {
    if(i < 100) {
      ap++;
    } else {
      const str = String(i);
      let diff = parseInt(str[0]) - parseInt(str[1]);
      if(diff > 5) continue;
      if(diff === parseInt(str[1]) - parseInt(str[2])) {
        ap++;
      }
    }
  }  
  console.log(ap);
  process.exit();
});