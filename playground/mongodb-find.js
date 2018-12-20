    // const MongoClient = require('mongodb').MongoClient;
    const {MongoClient, ObjectID} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
        if(err){
            return console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // db.collection('Todos').find({
        //     // completed: false
        //     _id: new ObjectID('5c1be310936826be697663fd')
        // }).toArray().then((docs)=>{
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, null, 2));
        // }, (err)=>{
        //     console.log('Unable to featch todos', err);
        // });

        // db.collection('Todos').find().count().then((count)=>{
        //     console.log(`Todos count: ${count}`);
        // }, (err)=>{
        //     console.log('Unable to featch todos', err);
        // });

        db.collection('Users').find({
            name : "Bob"
        }).toArray().then((docs)=>{
            console.log('Users');
            console.log(JSON.stringify(docs, null, 2));
        }, (err)=>{
            console.log('Unable to featch todos', err);
        });
        
        // client.close(); // close the connection to the db
    });