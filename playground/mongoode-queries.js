const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

const {User} = require('../server/models/user');

var userId = "5c68029df97c342c2dc02115";

User.findById(userId).then(user=> {
    if(!user){
        console.log('Unable to find user');
    }else{
        console.log(user);
    }
}, e=> console.log(e));






// var id = '5c6e53c7d6c75454231aaef7';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     completed: true
// }).then((todo)=>{
//     console.log('Todo', todo);
// });


// Todo.findById(id)
// .then((todo)=>{
//     if(!todo){
//         console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch(e=>{
//     console.log(e);
// });
