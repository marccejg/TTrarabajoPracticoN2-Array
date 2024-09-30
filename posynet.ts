/*• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/
console.clear();
import * as fs from 'readline-sync';

//variables
let cuentaMenor: number = 0;
let cuentaMayor: number = 0;
let cuentaCero: number = 0

//usuario carga arreglo
let tam: number = fs.questionInt("ingrese el tamaño para el arreglo: ")

// armar el arreglo
let arreglo: number[] = new Array(tam);

//agrega al array


let long: number = arreglo.length;

for (let i: number = 0; i < long; i++) {
    arreglo[i] = fs.questionInt("agregue un numero al arreglo: ");


};
for (let i: number = 0; i < long; i++) {
    if (arreglo[i] < 0) {
        cuentaMenor = cuentaMenor + 1;

    };
};

for (let i: number = 0; i < long; i++) {
    if (arreglo[i] > 0) {
        cuentaMayor = cuentaMayor + 1;

    };
};


for (let i: number = 0; i < long; i++) {
    if (arreglo[i] === 0) {
        cuentaCero = cuentaCero + 1;

    };
};
console.log("hay", cuentaMenor, "negativos", ",", cuentaMayor, "positivos, y ", cuentaCero, " ceros");


