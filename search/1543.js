const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {  
  let file = input.shift();
  let word = input.shift();
  let reg = new RegExp(word, 'g');
  let exist = file.match(reg);
  
  if(exist) {
    console.log(exist.length);
  } else {
    console.log(0);
  }
  process.exit();
});