const fs = require('fs')

// delete a file --> fs.unlink('writeme.txt')

/* Create directory */

// This is blocking code
fs.mkdirSync('stuff')

/* Delete directory */

// This is blocking code
fs.rmdirSync('stuff')

/* 
    Async creation and deletion
    Use callback function for async operations
*/

// Create directory asynchronously
fs.mkdir('stuff', function() {
    fs.readFile('readme.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/writeme.txt', data)
    })
})

// Delete directory aynchronously — cannot delete non-empty directory
fs.rmdir('stuff')
