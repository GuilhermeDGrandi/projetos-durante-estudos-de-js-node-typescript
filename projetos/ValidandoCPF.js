// 705.484.450-52 - cpf para teste
//--- /|D+/g -> codigo para pegar somente numeros em replace


let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

function TestaCPF(strCpf){

var Soma;
var Resto;
Soma=0;

for(let i = 1; i <= 9; i++){
    Soma =  Soma +  parseInt(strCpf.substring(i-1, i)) * (11 - i)
}


Resto = (Soma * 10) % 11;
if(Resto> 9) Resto=0;
if(Resto != parseInt(strCpf.substring(9,10))) return false;

Soma=0;
for(let i = 1; i <= 10; i++){
    Soma =  Soma +  parseInt(strCpf.substring(i-1, i)) * (12 - i)
}
Resto = (Soma * 10) % 11;
if(Resto> 9) Resto=0;
if(Resto != parseInt(strCpf.substring(10,11))) return false;
return true;
}

if (TestaCPF(cpfLimpo) == true){
    console.log('CPF VALIDO')
}else{
    console.log('CPF INVALIDO')
}

