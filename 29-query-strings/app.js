/*

        Query strings

        * mysite.com/blog/news?page=2
        * mysite.com/contact?person=daksh&dept=web
        * parse the request, and pull out the data

*/

// require express module
const express = require('express')
// set up express app by firing function
const app = express()

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

// set up a dynamic route to access name from URL
app.get('/profile/:name', (req, res) => {
    // additional data object to pass data to view
    const data = { age: 29, job: 'web developer', hobbies: ['eating', 'fighting', 'fishing'] }
    // render a view, pass name and additional data to view using object as second parameter
    res.render('profile', { person: req.params.name, data })
})

// listen to port 3000
app.listen(3000)