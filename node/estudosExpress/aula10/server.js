//req.params, vem na url
//req.query vem dps do '?' na url
//req.body vem do post do formulário



const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))

app.use(express.static('./public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000 ,() =>{
    console.log('Acessar http://localhost:3000')
    
    console.log('servidor executando porta 3000')
});


