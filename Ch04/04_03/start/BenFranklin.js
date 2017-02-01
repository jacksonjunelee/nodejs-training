// const events = require('events');
//
// let emitter = new events.EventEmitter();
//
// emitter.on('customEvent', (message, status) => {
//   console.log(`${status}: ${message}`);
// });
//
// emitter.emit('customEvent', "Hello World", 200);

const eventEmitter = require('events').EventEmitter;
const util = require('util');

let Person = function(name) {
  this.name = name;
};

util.inherits(Person, eventEmitter);

var emily = new Person('Emily Tre');

emily.on('speak', function(said) {
  console.log(`${this.name} said ${said}`);
});

emily.emit('speak', 'one two three');
