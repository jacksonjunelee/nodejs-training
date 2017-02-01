const fs = require('fs');
debugger
if (fs.existsSync('lib')) {
  console.log('Directory already there');
} else {
  fs.mkdir('lib', (err) => {

    if (err) {
      throw err;
    } else {
      console.log('Directory Created');
    }
  });
}
