const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome:<input type="text" name="nome">
        <button>enviar</button>
        </form>         
        `);
});
app.post('/' , (req,res)=>{
    res.send('recebi o formulário')
})


app.get('/contato', (req, res) => {
    res.send()
})


app.listen(3000 ,() =>{
    console.log('Acessar http://localhost:3000')
    
    console.log('servidor executando porta 3000')
});


