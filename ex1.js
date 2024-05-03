import { calculator }  from './calculator.js';

const adding = calculator.add(1,2);
console.log("Operação de soma: " + adding);

const subtracting = calculator.subtract(5,3);
console.log("Operação de subtração: " + subtracting);

const multiplying = calculator.multiply(5,5);
console.log("Operação de multiplicação: " + multiplying);

const dividing = calculator.divide(10,2);
console.log("Operação de divisão: " + dividing);