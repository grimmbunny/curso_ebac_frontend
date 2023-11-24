"use strict";
function calculaArea3(base, altura) {
    const resultado = base * altura;
    return resultado;
}
function saudacao(nome) {
    return `Olá ${nome}!`;
}
const calculaArea4 = calculaArea3(10, 6);
const saudarKitty = saudacao('Kitty');
console.log(calculaArea4);
console.log(saudarKitty);
