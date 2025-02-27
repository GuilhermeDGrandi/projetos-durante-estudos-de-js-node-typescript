import Aluno from '../models/Aluno'


class HomeController{

  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'Guilherme',
      sobrenome: 'De Grandi',
      email: 'teste@teste.com',
      idade: '21',
      peso: '60',
      altura: '160',
    })
    res.json(novoAluno)
  }
}

export default new HomeController();