 import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qnt = document.querySelector('.qnt-caracteres')
const chkNumeros = document.querySelector('.chk-number')
const chkMaiuscula = document.querySelector('.chk-maiuscula')
const chkMinuscula = document.querySelector('.chk-minuscula')
const chkSimbol = document.querySelector('.chk-simbol')
const btnGerarSenha = document.querySelector('.btn-gera-senha')

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