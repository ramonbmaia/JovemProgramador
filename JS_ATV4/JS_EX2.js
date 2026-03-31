let peso = 68.00;
let altura = 1.67;

let imc = peso / (altura * altura);

console.log("Seu IMC é " + imc);

if (imc < 18.5) {
    console.log("Você está abaixo do peso!");
} 
else if (imc < 25) {
    console.log("Você está no seu peso normal!");
} 
else if (imc < 30) {
    console.log("Você tem sobrepeso!");
} 
else if (imc < 35) {
    console.log("Você tem Obesidade Grau I!");
} 
else if (imc < 40) {
    console.log("Você tem Obesidade Grau II!");
} 
else {
    console.log("Você tem Obesidade Grau III!");
}