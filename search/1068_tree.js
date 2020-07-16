const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];

let deleteNode = (tree, delNode) => {
  tree.forEach((node, i) => {
    if(node === delNode) {
      tree.splice(i, 1, undefined);
      return deleteNode(tree, i);
    }
  });
}

let countLeafNode = (tree) => {
  let leafNodes = 0;
  tree.forEach((node, idx) => {
    if(node !== undefined && tree.indexOf(idx) === -1) {
      leafNodes++;
    }
  });
  return leafNodes;
}

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input.shift());
  let tree = input[0].split(' ').map((el) => parseInt(el));
  const delNode = Number(input.pop());

  if(tree.indexOf(-1) === deleteNode) return 0;

  if(delNode < N) {
    tree.splice(delNode, 1, undefined);
    deleteNode(tree, delNode);
    console.log(countLeafNode(tree));

  } else {
    console.log(countLeafNode(tree));
  }
  process.exit();
});