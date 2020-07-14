const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
let groupWords = 0;

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  input.shift(); // 필요 없는 수를 빼줌

  input.forEach((el) => {
    if(checkWord(el)) groupWords++;
  });

  console.log(groupWords);
  process.exit();
});

function checkWord (word) {
  // 단어를 0->length 까지 진행하면서 처음 있는 문자 같은 경우에는 객체에 넣어준다.
  // 그리고 이미 객체에 있는 문자인데 그 전의 단어와 연결이 된다면 괜찮음 이대로 유지되면 true
  // 그러나 이미 있는 문자인데 그 전의 문자와 다르다면 false
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    if (obj[word[i]] !== undefined && word[i] !== word[i-1]) { 
      // index = 0 인 경우에는 i-1은 없지만 obj[word[i]]도 undefined이기 때문에 if문의 조건에 포함되지 않는다.
      return false;
    } else {
      // else 의 경우는 객체에 없는 문자이거나, 있다면 전의 문자와 같거나 
      obj[word[i]] = 1;
    }
  }
  return true;
}