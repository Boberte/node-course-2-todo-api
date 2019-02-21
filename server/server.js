var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});


app.listen(3000, ()=>{
    console.log('Started on port 3000');
});
















// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then(
//     doc => console.log('Saved todo', doc),
//     err => console.log('Unable to save todo', err)
// );


// var newerTodo = new Todo({
//     text: 'Dance',
//     completed: true,
//     completedAt: Number(new Date())
// });

// newerTodo.save().then(
//     doc => console.log('Saved todo', doc),
//     err => console.log('Unable to save todo', err)
// );



// var firstUser = new User({
//     email: 'newUser@emails.com'
// });

// firstUser.save().then(
//     doc=> console.log('Saved user', doc), 
//     err=> console.log('Unable to  save user', err)
// );
