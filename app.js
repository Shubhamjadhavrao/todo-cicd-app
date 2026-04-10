const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {

    console.log(`Request: ${req.method} ${req.url}`);

    // Route: Home Page
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'view', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading page");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // Route: API
    else if (req.url === '/api/data') {
        const data = {
            message: "CI/CD Pipeline Working 🚀",
            status: "success",
            time: new Date()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }

    // Route: About
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>About Page</h1><p>This app is deployed using Jenkins CI/CD 🚀</p>");
    }

    // 404
    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});