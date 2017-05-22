/*
    Streams in Node.js
    ------------------

    1. Writable streams — allows node.js to write data to a stream
    2. Readable streams — allows node.js to read data from a stream
    3. Duplex — can read and write to a stream

*/

const http = require('http')
const fs = require('fs')

// create a utf8 encoded read stream for readme.txt
const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`, 'utf8')

// do something on receiving chunk
myReadStream.on('data', function(chunk) {
    // display message and output chunk
    console.log('New chunk received')
    console.log(chunk)
})