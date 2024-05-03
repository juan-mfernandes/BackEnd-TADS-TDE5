/* 1. Crie um modulo de calculadora, exportando as 4 operações básicas: somar, subtrair, dividir, multiplicar
- Dentro de outro arquivo, importar as funções e executar as operações */

const operations = require("./calculator.js");

const adding = operations.somar(1,2);
console.log("Operação de soma: " + adding);

const subtracting = operations.subtrair(5,3);
console.log("Operação de subtração: " + subtracting);

const multiplying = operations.multiplicar(5,5);
console.log("Operação de multiplicação: " + multiplying);

const dividing = operations.dividir(10,2);
console.log("Operação de divisão: " + dividing);