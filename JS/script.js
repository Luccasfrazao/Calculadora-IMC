const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
    return SetResultado('resultado invalido', false);
    }

    if(!altura){
    return SetResultado('resultado invalido', false);
    }

    const imc = GetImc(peso, altura);
    const msg = `O seu IMC é ${imc} (${GetNivelImc(imc)})`;
    
    SetResultado(msg, true);



})


function GetImc(peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2); 
}

function GetNivelImc(imc){
    const nivel = ['abaixo do peso','peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 
'obesidade grau 3'];

if (imc >= 39.9) return nivel[5];
if (imc >= 34.9) return nivel[4];
if (imc >= 29.9) return nivel[3];
if (imc >= 24.9) return nivel[2];
if (imc >= 18.5) return nivel[1];
if (imc <= 18.5) return nivel[0];

}

function CriaP(){
    const p = document.createElement('p');
    return p;
}


function SetResultado(msg, IsValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = CriaP();

    resultado.appendChild(p);
     p.innerHTML = msg;

     
    if(IsValid){
        p.classList.add('resultado-correto');
    }else{
        p.classList.add('resultado-incorreto');
    }

}