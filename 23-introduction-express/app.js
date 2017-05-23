/*

        Introduction to Express

        * By using Express in Node.js, we can respond to different HTTP requests very easily 
        * HTTP methods of making requests
            * GET — app.get('route', fn)
            * POST — app.post('route', fn)
            * DELETE — app.delete('route', fn)
            * PUT

*/

// require express module
const express = require('express')
// set up express app by firing function
const app = express()

// set up a route to listen for '/'
app.get('/', (req, res) => {
    res.send('this is the homepage')
})
// set up a route to listen for '/contact'
app.get('/contact', (req, res) => {
    res.send('this is the contact page')
})

// listen to port 3000
app.listen(3000)