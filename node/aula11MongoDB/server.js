//req.params, vem na url
//req.query vem dps do '?' na url
//req.body vem do post do formulário

//importa coisas relacionadas ao meu ambiente de desenvolvimento(senhas, connectstring, etc)
require('dotenv').config()

const express = require('express')
const app = express()
//modela base de dados
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
    app.emit('pronto')})
    .catch(e => console.log(e))

//session é para identificar o navegador do cliente(cookies)
const session = require('express-session')

//sessoes vão ser salvas na base de dados
const MongoStore = require('connect-mongo');

//mensagens auto destrutivas(mensagens de erro e etc)
const flash = require('connect-flash')

//rotas da aplicação(/home, /contato ,etc)
const routes = require('./routes')

//trabalhar com caminhos
const path = require('path')

//recomendação do express, segurança
const helmet = require('helmet')

//token para verificação de formulários, para segurança
const csrf = require('csurf')

//middlewares, funçoes executadas durante a rota (funçoes executadas no meio)
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware')

//
app.use(helmet())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//arquivos que são estáticos e podem ser acessados diretamente
app.use(express.static('./public'))

//configuração de seção
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

//telas
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(csrf())
//nossos próprios middlewares
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
//app.use(outroMiddlewareGlobal)

//usando as rotas
app.use(routes)

//aplicação escutando
app.on('pronto', ()=>{
    app.listen(3000 ,() =>{
        console.log('Acessar http://localhost:3000')
        
        console.log('servidor executando porta 3000')
    });
})


