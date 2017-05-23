/*

        Handling POST requests

        * POST is a request method
        * Asks server to accept/store data which is enclosed in the body of the request
        * Used when submitting forms

*/

// require express module
const express = require('express')
// require body-parser
const bodyParser = require('body-parser')
// set up express app by firing function
const app = express()
// this is gonna parse POST data for us (use as middleware)
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// set view engine to ejs — looks for views in '/views' directory
app.set('view engine', 'ejs')

// this middleware will fire whenever someone visits URL '/assets' and map to directory 'assets'
app.use('/assets', express.static('assets'))

// set up a route to listen for '/'
app.get('/', (req, res) => {
    // render index view
    res.render('index')
})
// set up a route to listen for '/contact'
app.get('/contact', (req, res) => {
    // render contact view, req.query property to access query string in URL
    res.render('contact', {qs: req.query})
})

// handle (parse) POST request data coming from url '/contact' on submit
app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body)
    // render contact-success view, send req.body to view through data object
    res.render('contact-success', {data: req.body})
})

// set up a dynamic route to access name from URL
app.get('/profile/:name', (req, res) => {
    // additional data object to pass data to view
    const data = { age: 29, job: 'web developer', hobbies: ['eating', 'fighting', 'fishing'] }
    // render a view, pass name and additional data to view using object as second parameter
    res.render('profile', { person: req.params.name, data })
})

// listen to port 3000
app.listen(3000)