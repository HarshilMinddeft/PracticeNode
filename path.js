const path = require("path");
const fs = require("fs");

// const a = path.basename("/foo/bar/baz/asdf/quux.html");
// console.log(a);

// const b = fs.readFileSync("file.txt");
// console.log(b.toString());
fs.writeFileSync("hh.txt", "This is new data", () => {
  console.log("hii");
});
console.log("finish");
