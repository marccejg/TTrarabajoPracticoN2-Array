/*Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

console.clear();
import * as fs from 'readline-sync';

//usuario carga arreglo
let tam: number = fs.questionInt("ingrese el tamaño para el arreglo: ");
let arreglo: number[] = new Array(tam);

//agrega al array

let long: number = arreglo.length;
for (let i: number = 0; i < long; i++) {
    arreglo[i] = fs.questionInt("agregue un numero al arreglo: ");
};

//imprimir invertido
console.log(arreglo);
for (let i: number = long; i > -1; i--) {
    let acumula: number = arreglo[i];
    console.log(acumula);
};
