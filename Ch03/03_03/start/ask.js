process.stdout.write("Hello");

process.stdout.write("World \n\n\n\n\n")

let questions = [
  "What is your name?",
  "What is your hobby?",
  "What is your fav programming language"
];

let answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write("   >   ");
}

// process.stdin.on('data', (data) => process.stdout.write('\n' + data.toString().trim() + '\n'));

process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write("\n\n\n\n");

  for (const answer of answers) {
    process.stdout.write(`${answer} `)
  }
  process.stdout.write("\n\n\n\n")
})

ask(0);
