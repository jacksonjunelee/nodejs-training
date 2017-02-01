let waitTime = 3000;
let currentTime = 0;
let waitInterval = 10;
let percentwaited = 0;

// console.log("Wait for it");

function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}% `);
}

const interval = setInterval(() => {
  currentTime += waitInterval;
  percentwaited = Math.floor(currentTime * 100 / waitTime );
  writeWaitingPercent(percentwaited);
  // console.log(percentwaited);
  // console.log(`waiting ${currentTime / 1000} seconds...`)
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log('\n\n done \n\n')
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentwaited);
