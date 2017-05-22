const http = require('http')
const fs = require('fs')

// create read stream to read file readme.txt
const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`)
// create write stream to write to file writeme.txt
const myWriteStream = fs.createWriteStream(`${__dirname}/writeme.txt`)

// do something on reading a chunk
myReadStream.on('data', function(chunk) {
    // display message on receive
    console.log('New chunk received')
    // write on receiving chunk
    myWriteStream.write(chunk)
})