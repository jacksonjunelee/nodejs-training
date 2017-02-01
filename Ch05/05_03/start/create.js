const fs = require('fs');

const md = `

sample Markdown Title
=====================

Sample subtitle
----------------

* point
* poiny
* point
`;

fs.writeFile('sample.md', md.trim(), (err) => {
  console.log('File Created');
})
