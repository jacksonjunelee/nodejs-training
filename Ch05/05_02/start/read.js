const fs = require('fs');
const path = require('path');

fs.readdir('./lib', (err, files) => {

  files.forEach((fileName) => {
    let file = path.join(__dirname, 'lib', fileName);
    let stats = fs.statSync(file);

    if (stats.isFile() && fileName !== '.DS_Store') {
      fs.readFile(file, 'UTF-8', (err, contents) => {
        console.log(contents);
      })
    }

  })
})

// fs.readFile('./lib/sayings.md', 'UTF-8', (err, contents) => {
//
//   if (err) {
//     console.log(err);
//   }
//
//   console.log(contents);
// });

// console.log(contents);
