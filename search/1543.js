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
  let reg = new RegExp(word, 'g'); // /aba/
  // console.log(reg);
  let exist = file.match(reg); // is exist?
  // ['aba', 'aba']
  // 없으면 null을 리턴해준다!
  // 문서에서 봤는데도 파악을 못했다.
  // ㅠㅠ
  if(exist) {
    console.log(exist.length);
  } else {
    console.log(0);
  }
  process.exit();
});