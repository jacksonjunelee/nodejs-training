const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let realPerson  = {
  name: '',
  sayings: []
}

rl.question("What is the name of a real person? ", (answer) => {
  realPerson.name = answer;
  rl.setPrompt(`What would ${realPerson.name} say?`)

  rl.prompt();

  rl.on('line', (saying) => {

    realPerson.sayings.push(saying.trim());

    if (saying.toLowerCase().trim() === 'exit') {
      rl.close()
    } else {
      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
      rl.prompt();
    }
  });
  // console.log(answer);
})

rl.on('close', () => {
  realPerson.sayings.pop();

  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
  process.exit()
});
