const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
  setTimeout(()=>{
    console.log('this is time bound function'),2000
  })
});
console.log("hii");
myEmitter.emit("event");
