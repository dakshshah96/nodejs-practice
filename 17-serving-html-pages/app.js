const http = require('http')
const fs = require('fs')

// Create a server with request object (req) and response object (res)
const server = http.createServer(function(req, res) {
    // Display message each time a request is made
    console.log(`Request was made: ${req.url}`)
    // header contents - send HTML
    res.writeHead(200, {'Content-Type': 'text/html'})

    // create read stream to read file readme.txt
    const myReadStream = fs.createReadStream(`${__dirname}/index.html`, 'utf8')
    // piping myReadStream to response stream
    myReadStream.pipe(res)
})

// listen to port 3000 on IP 127.0.0.1
server.listen(3000, '127.0.0.1')
console.log(`Now listening to port 3000`)