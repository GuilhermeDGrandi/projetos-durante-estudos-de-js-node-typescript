//req.params, vem na url
//req.query vem dps do '?' na url
//req.body vem do post do formulário



const express = require('express')
const app = express()
const mongoose = require('mongoose')


require('dotenv').config()

mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
    console.log('conectado!')
    app.emit('pronto')})

const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, outroMiddlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))

app.use(express.static('./public'))


const sessionOption = session({
    secret: 'adoawbdawdawdaadaw',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // isso da 7 dias em milesimos de segundos
        httpOnly: true
    }
})
app.use(sessionOption)
app.use(flash())

app.set('views', './src/views')
app.set('view engine', 'ejs')

//nossos próprios middlewares
app.use(middlewareGlobal)
//app.use(outroMiddlewareGlobal)
app.use(routes)

app.on('pronto', ()=>{
    app.listen(3000 ,() =>{
        console.log('Acessar http://localhost:3000')
        
        console.log('servidor executando porta 3000')
    });
})


