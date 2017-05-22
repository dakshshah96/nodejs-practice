// Require the http module
const http = require('http')

// Create a server with request object (req) and response object (res)
const server = http.createServer(function(req, res) {
    // Display message each time a request is made
    console.log(`Request was made: ${req.url}`)
    // header contents
    res.writeHead(200, {'Content-Type': 'text/plain'})
    // finishes sending the request and writes data
    res.end('Hey Daksh!')
})

// listen to port 3000 on IP 127.0.0.1
server.listen(3000, '127.0.0.1')
console.log(`Now listening to port 3000`)