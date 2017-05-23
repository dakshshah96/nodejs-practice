/*

        Express Route Parameters

        * Respond to dynamic requests instead of static ones like '/', '/contact'
        * Dynamic requests using route variables/parameters
        * Can query databases using route parameters

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

// set up a dynamic route to access id given in URL
app.get('/profile/:id', (req, res) => {
    // req.params is used to access the variable in url
    res.send(`You requested to see a profile with an ID of ${req.params.id}`)
})

// listen to port 3000
app.listen(3000)