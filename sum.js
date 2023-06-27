const args = process.argv;
let sum = function(a, b) {
  return a + b;
};

console.log(sum(Number(args[2]), Number(args[3])));
