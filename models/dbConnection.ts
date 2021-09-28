import mongoose from "mongoose";
require('dotenv').config();
// database vars from env
const DB_PORT = process.env.DB_PORT;
const DB_HOST_NAME = process.env.DB_HOST_NAME;
const DATABASE_NAME = process.env.DATABASE_NAME;
const url = 'mongodb://' + DB_HOST_NAME +":"+ DB_PORT + '/' + DATABASE_NAME;
// connection

mongoose.connect(url).then(() => console.log('connection succesful'))
    .catch(err=>{
        console.log(`db error ${err.message}`);
        process.exit(-1)
    })
// get connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


export default db;