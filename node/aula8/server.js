//req.params, vem na url
//req.query vem dps do '?' na url
//req.body vem do post do formulário



const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome:<input type="text" name="nome">
        <button>send</button>
        </form>         
        `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    res.send(req.params)
    console.log(req.params)
    console.log(req.query)
})

app.post('/' , (req,res)=>{
    console.log(req.body)
    res.send(`foi enviado: ${req.body.nome}`)
})

app.listen(3000 ,() =>{
    console.log('Acessar http://localhost:3000')
    
    console.log('servidor executando porta 3000')
});


