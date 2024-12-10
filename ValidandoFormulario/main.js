 class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.Eventos();
    }

    Eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.campoSaoValidos();

    }
    campoSaoValidos(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for(let campo of this.formulario.querySelectorAll('.validar')){
            if(!campo.value){
                this.createError(campo, `campo "${label}" não pode estar em branco.`);
                valid = false
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }
        }
    }

    validaCPF(campo){
        const cpf = new validaCPF(campo.value)
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido');
            return false
        }
        return true
    }


    criaErro(campo, msg){
        const label = campo.previousElementSibling.innerText;
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)       
    }
 }

const valida = new ValidaFormulario();
