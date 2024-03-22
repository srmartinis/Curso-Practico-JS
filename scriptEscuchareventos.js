let h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("button");
let p = document.querySelector("#resultado");
let form = document.querySelector("#form");

 
let resultado

//boton.addEventListener("click",calcular)
form.addEventListener("submit",calcular);
console.log({form});

function calcular () {
    resultado=(Number(input1.value))+Number((input2.value));
    console.log(resultado);
    p.innerHTML="el total es de " + resultado;
}
