// General convention to set variable name equal to the module name
const fs = require('fs')

/* Read files */

// This is blocking code
let readme = fs.readFileSync('readme.txt', 'utf8')
console.log(readme)

/* Write files */

// This is blocking code
fs.writeFileSync('writeme.txt', readme)

/* Async read and write */

fs.readFile('readme.txt', 'utf8', function(err, data) {
    fs.writeFile('writeme.txt', data)
})