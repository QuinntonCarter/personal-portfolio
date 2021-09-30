const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');

const port = 9000

app.use(express.json())
app.use(morgan('dev'))

mongoose.connnect(
    'mongodb://localhost:27017/todoDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the DB, bruh')
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET }))
app.use('/api/todos', require('./routes.todoRouter.js'))

app.use((err, req,res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
    res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(port, ()=> {
    console.log(`Server is running on local port ${port}`)
})