const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let cor = [0, 0];
let curDir = 0;
cor = [cor[0] + dir[curDir][0], cor[1] + dir[curDir][1]];
console.log(cor);
