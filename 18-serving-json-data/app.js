const http = require('http')
const fs = require('fs')

// Create a server with request object (req) and response object (res)
const server = http.createServer(function(req, res) {
    // Display message each time a request is made
    console.log(`Request was made: ${req.url}`)
    // header contents - send JSON data
    res.writeHead(200, {'Content-Type': 'application/json'})

    // create JSON object to send - useful for API endpoints
    const myObj = {
        name: 'Daksh',
        job: 'Web Developer',
        age: 21
    }

    // can't write myObj directly because .end method expects string/buffer
    res.end(JSON.stringify(myObj))

})

// listen to port 3000 on IP 127.0.0.1
server.listen(3000, '127.0.0.1')
console.log(`Now listening to port 3000`)