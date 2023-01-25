import express from 'express'
import mysql from 'mysql2/promise'
import mongoose from 'mongoose'

const app = express();

const client = mysql.createPool({
    host:'localhost',
    port: 3306,
    user:'root',
    password: 'fAztpassword'
})

const response = await client.query('select 1 + 1');
console.log(response);

const mongoConecciton = await mongoose.connect('mongodb://localhost:27017/twitchdb')
console.log(mongoConecciton.connection.db.databaseName);

app.listen(3000);
console.log('server on port 3000');
