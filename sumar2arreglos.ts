/*Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario*/
console.clear();
import * as fs from 'readline-sync';

//usuario carga arreglo1 
let arreglo1: number[] = new Array(6);

//agrega al array

let long: number = arreglo1.length;

for (let i: number = 0; i < long; i++) {
    arreglo1[i] = fs.questionInt("agregue un numero al arreglo 1: ");
};

//usuario carga arreglo 2

let arreglo2: number[] = new Array(6);
let long2: number = arreglo2.length;
for (let i: number = 0; i < long; i++) {
    arreglo2[i] = fs.questionInt("agregue un numero al arreglo 2: ");
};



//arreglo resultado
let resultado: number[] = new Array(6);
const longResultado: number = 6;

for (let i: number = 0; i < longResultado; i++) {
    resultado[i] = arreglo1[i] + arreglo2[i];

};

console.log(resultado)
