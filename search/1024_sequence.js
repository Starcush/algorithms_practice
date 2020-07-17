/*
  N = x + (x+1) + (x+2) + ... (x+ (L-1))
  N = (x * L) + (1 + 2 + 3 + ... + (L-1))
  x = (N -(((L-1)L)/2) / L
  x = (N/L) - (L-1) /2
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = '';

let getStartNum = (N, L) => {
  let diffSum = ((L-1) * L) / 2;
  return (N - diffSum) / L;
}

let getSequenceArr = (startNum, length) => {
  let arr = [];
  for(let i = 0; i < length; i++) {
    arr.push(startNum + i);
  }
  return arr;
}

let makingResult = (arr) => {
  return arr.join(' ');
}



rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  const N = parseInt(input.split(' ')[0]);
  const minLength = parseInt(input.split(' ')[1]);

  let exist = false;
  let resultArr = [];
  
  for(let i = minLength; i <= 100; i++) {
    let startNum = getStartNum(N, i);
    // startNum이 정수일 때랑 아닐 때랑

    if(Number.isInteger(startNum) && startNum >= 0) {
      // minLength부터 시작하니까 무조건 크거나 같음
      // 조건이 중요함 음수일때는 포함이 되면 안된다. 반례는 100 10 일 경우
      exist = true;
      resultArr = getSequenceArr(startNum, i);
      break;
    }
  }

  if (exist) {
    console.log(makingResult(resultArr));
  } else {
    console.log(-1);
  }
  
  process.exit();
});