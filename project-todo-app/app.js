/*

        To-do app using Express

        * Follow MVC — Model View Controller
            * Model: Data — todos, users, etc.
            * View: Template files — todo.ejs, account.ejs, etc.
            * Controller: Controls the app sections, data manipulation — todoController, userController, etc.
        * ./app.js — main file for todo app
        * controllers/todoController.js — handles GET, POST and DELETE requests
        * views/todo.ejs — HTML template file using EJS
        * public/assets — directory to serve static assets
            * styles.css — handles styling of front-end
            * todo-list.js — front-end using jQuery
                * gets data using ajax request
                * handle form submission
                * handle item deletion

*/

const express = require('express')
const todoController = require('./controllers/todoController')

const app = express()

// set up template engine ejs
app.set('view engine', 'ejs')

// static files for every route in URL to public directory
app.use(express.static('./public'))

// fire controllers, pass app
todoController(app)

// listen to port
app.listen(3000)
console.log('You are listening to port 3000...')