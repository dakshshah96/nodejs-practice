const bodyParser = require('body-parser')

// todo list items
let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]
// middleware to run in POST request
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = app => {

    // render view on visiting /todo
    app.get('/todo', (req, res) => {
        // render todo view and pass data
        res.render('todo', {todos: data})
    })

    // handle POST request on ajax request
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body)
        // send data back to frontend
        res.json(data)
    })

    // allow deletion of todo item using URL parameter
    app.delete('/todo/:item', (req, res) => {
        data = data.filter(todo => todo.item.replace(/ /g, '-') !==  req.params.item)
        res.json(data)
    })
}