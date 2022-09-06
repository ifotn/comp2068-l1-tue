// reference Node's built-in http library
const http = require('http')

// start a local web server
// function passed as a param to another is our non-blocking "callback"
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write('<h1>Hello world</h1>')
    res.end()
}).listen(3000)

console.log('Node running on port 3000')