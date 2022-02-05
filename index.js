var http = require('http')
var mongoose = require('mongoose')
var express = require('express')
var route = require('./route')

var bodyParser =require('body-parser')

mongoose.connect('mongodb+srv://sjethva:rrC3GNcGTE6EFwIe@cluster0.j712b.mongodb.net/department?retryWrites=true&w=majority').then(()=>{
    console.log('DB Connected....')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    http.createServer(app).listen(process.env.PORT||3000);
        console.log('server started')
})