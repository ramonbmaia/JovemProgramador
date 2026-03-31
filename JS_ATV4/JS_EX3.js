let numero = 5;

switch (true) {
    case (numero === 0):
        console.log("O número é zero!");
        break;
    case (numero > 0):
        console.log(numero + " é positivo!");
        break;
    case (numero < 0):
        console.log(numero + " é negativo!");
        break;
    default:
        console.log(numero + "é invalido!");
}