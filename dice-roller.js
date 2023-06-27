const cli = process.argv.slice(2);
const rollDice = function(input) {
  let newString = "";
  for (let i = 0; i < input[0]; i++) {
    if (i === 0) {
      newString += Math.round(Math.random() * 6);
    } else {
      newString += (", " + Math.round(Math.random() * 6));
    }
  }
  return `Rolled ${cli} dice: ` + newString;
};

console.log(rollDice(cli));