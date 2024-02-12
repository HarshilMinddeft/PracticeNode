const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  //   console.log(res);
  //   res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url == "/") {
    res.end("<h1>Hiii</h1>");
  } else if (req.url == "/new") {
    res.end("<h2>This is new page</h2>");
  } else if (req.url == "/first1") {
    const data1 = fs.readFileSync("first1.html");
    res.end(data1.toString());
  } else {
    res.statusCode = 200;
    res.end("not found");
  }
});

server.listen(port, () => {
  console.log({ port });
});
