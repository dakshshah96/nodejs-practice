const events = require('events')
const util = require('util')

const Person = function(name) {
    this.name = name
}

util.inherits(Person, events.EventEmitter)

const james = new Person('james')
const mary = new Person('mary')
const john = new Person('john')

const people = [james, mary, john] 

people.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(`${person.name} said: ${message}`)
    })
});

james.emit('speak', 'hey dudes')
john.emit('speak', 'I want a curry')