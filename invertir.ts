/*Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

console.clear();
import * as fs from 'readline-sync';

//usuario carga arreglo1 
const tam: number = fs.questionInt("ingrese el tamaño para el arreglo: ")
const arreglo: number[] = new Array(tam);

//agrega al array

let long: number = arreglo.length

for (let i: number = 0; i < long; i++) {
    arreglo[i] = fs.questionInt("agregue un numero al arreglo: ");
}
console.log(arreglo);
for (let i:number=long ; i > -1; i--) {
    const acumula: number=arreglo[i]
    console.log (acumula)
};
