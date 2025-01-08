//req.params, vem na url
//req.query vem dps do '?' na url
//req.body vem do post do formulário



const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017'
mongoose.connect(connectionString)
.then(()=>{
    console.log('conectado!')
    app.emit('pronto')})


const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, outroMiddlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))

app.use(express.static('./public'))

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


