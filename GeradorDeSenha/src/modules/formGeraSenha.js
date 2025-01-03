 import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada')
const qnt = document.querySelector('.qnt-caracteres')
const chkMaiuscula = document.querySelector('.chk-maiusculas')
const chkMinuscula = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbol = document.querySelector('.chk-simbolos')
const btnGerarSenha = document.querySelector('.gerar-senha')

export default () => {
    btnGerarSenha.addEventListener('click', () => {
      senhaGerada.innerHTML = gera();
    });
  };

function gera(){
    const senha = geraSenha(
        qnt.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbol.checked
    );
    return senha 
    
}