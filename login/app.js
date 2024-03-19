
const express = require("express");
const app = express();
const PORT = 3000;
const router = require('./router')
const path = require('path')
const session = require("express-session")
const nocache = require("nocache")

app.set('view engine','ejs');
app.use(express.static('public'))
app.use(nocache());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
    
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`sever is running on http://localhost:${PORT}`);
})

