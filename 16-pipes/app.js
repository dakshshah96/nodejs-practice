const http = require('http')
const fs = require('fs')

/*

    Pipes in Node.js

    * Readable and writable streams are manual processes
    * A pipe take data from read stream and pipe it to the write stream
    * Don't have to manually listen and write

*/

/* Local example with files

        // create read stream to read file readme.txt
        const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`)
        // create write stream to write to file writeme.txt
        const myWriteStream = fs.createWriteStream(`${__dirname}/writeme.txt`)

        // piping myReadStream to myWriteStream
        myReadStream.pipe(myWriteStream)

*/

// Create a server with request object (req) and response object (res)
const server = http.createServer(function(req, res) {
    // Display message each time a request is made
    console.log(`Request was made: ${req.url}`)
    // header contents
    res.writeHead(200, {'Content-Type': 'text/plain'})

    // create read stream to read file readme.txt
    const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`)
    // piping myReadStream to response stream
    myReadStream.pipe(res)
})

// listen to port 3000 on IP 127.0.0.1
server.listen(3000, '127.0.0.1')
console.log(`Now listening to port 3000`)