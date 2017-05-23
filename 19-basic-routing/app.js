/*
        Routing in Node.js

        Send different content according to URL
        For example, /home, /about, /contact
        Useful for API endpoints

*/

const http = require('http')
const fs = require('fs')

// Create a server with request object (req) and response object (res)
const server = http.createServer(function(req, res) {
    // Display message each time a request is made
    console.log(`Request was made: ${req.url}`)

    if(req.url === '/home' || req.url === '/') {
        // header contents - send HTML
        res.writeHead(200, {'Content-Type': 'text/html'})
        // read index.html and pipe to response object
        fs.createReadStream(`${__dirname}/index.html`).pipe(res)
    } else if(req.url === '/contact') {
        // header contents - send HTML
        res.writeHead(200, {'Content-Type': 'text/html'})
        // read contact.html and pipe to response object
        fs.createReadStream(`${__dirname}/contact.html`).pipe(res)
    } else if(req.url === '/api/people') {
        // create JSON object
        var people = [{name: 'daksh', age: 20}, {name: 'james', age: 35}, {name: 'mary', age: 23}, {name: 'paula', age: 28}]
        // header contents - send JSON data
        res.writeHead(200, {'Content-Type': 'application/json'})
        // send JSON to browser after serializing
        res.end(JSON.stringify(people))
    } else {
        // header contents - send HTML
        res.writeHead(200, {'Content-Type': 'text/html'})
        // read 404.html and pipe to response object
        fs.createReadStream(`${__dirname}/404.html`).pipe(res)
    }
})

// listen to port 3000 on IP 127.0.0.1
server.listen(3000, '127.0.0.1')
console.log(`Now listening to port 3000`)