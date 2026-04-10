const http = require('http');

http.createServer((req, res) => {
  res.write("CI/CD Working 🚀");
  res.end();
}).listen(3000);