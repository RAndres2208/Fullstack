console.log("hola mundo desde main.js");


const miBoton = document.getElementById("miBoton");
const primerNumero = document.getElementById("primerNumero");
const segundoNumero= document.getElementById("segundoNumero")
const miSelector =document.getElementById("miSelector");
const resultado = document.getElementById("resultado");


console.log(miBoton, primerNumero, segundoNumero, miSelector, resultado);

class Calculadora{
    sumar(n1, n2){
        return n1 + n2;
    }
}
 const calculadora = new Calculadora();

 class Calculadora2{
    multiplicacion(n1, n2){
        return n1 * n2;
    }
}
 const calculadora2 = new Calculadora2();

 class Calculadora3{
    resta(n1, n2){
        return n1 - n2;
    }
}
 const calculadora3 = new Calculadora3();

 class Calculadora4{
    division(n1, n2){
        return n1 / n2;
    }
}
 const calculadora4 = new Calculadora4();

miBoton.addEventListener("click",function () {

const valorMiSelector = miSelector.value;
const valorPrimerNumero = Number(primerNumero.value);
const valorSegundoNumero = Number(segundoNumero.value);

console.log(valorPrimerNumero + valorSegundoNumero, valorMiSelector);

let resultadoOperacion;
   if (valorMiSelector === "suma"){
    resultadoOperacion = valorPrimerNumero + valorSegundoNumero;
   }else if(valorMiSelector === "resta"){
    resultadoOperacion= valorPrimerNumero - valorSegundoNumero;
   }else if(valorMiSelector ==="multiplicacion"){
    resultadoOperacion= valorPrimerNumero * valorSegundoNumero;
   }else if(valorMiSelector === "division"){
    resultadoOperacion= valorPrimerNumero/valorSegundoNumero;
   }


resultado.innerHTML = resultadoOperacion;
});