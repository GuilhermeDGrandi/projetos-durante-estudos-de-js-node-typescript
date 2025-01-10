
const homeModel = require('../models/homeModel')

//homeModel.create({
//    titulo: 'titulo teste',
//    descricao: 'descricao teste'
//})
//.then(dados => console.log(dados))
//.catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
res.render('index', {
    titulo: 'este é um titulo teste',
    numeros: [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9]
})
    return;
    };

exports.trataPost = (req, res)=>{
        res.send(req.body)
        return;
}