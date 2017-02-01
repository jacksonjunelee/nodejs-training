let path = require('path');

let hello = "Hello World";
let justNode = `${hello}`;

// global.console.log('Hello');
// console.log(hello);
// console.log(justNode);
// console.log(__dirname);
// console.log(__filename);

console.log(`${path.basename(__filename)}`);
