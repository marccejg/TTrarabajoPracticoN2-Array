/*Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario. 
Al final debe imprimir los valores por consola*/
console.clear();
import * as fs from 'readline-sync';
//arreglo
let nombre: string[] = new Array(2);

//agrega al array
for (let i: number = 0; i < nombre.length; i++) {
    nombre[i] = fs.question("agregue un nombre: ");
    console.log(nombre[i]);
};
//devuelve ubicacion
for (let i: number = 0; i < nombre.length; i++) {
    console.log(`el elemento en ${i} es ${nombre[i]}`);
};

/*
*
*/


let num2: number[] = new Array(3);
for (let i: number = 0; i < num2.length; i++) {
    num2[i] = fs.questionInt("agregue numero: ")
};
for (let i: number = 0; i < num2.length; i++) {
    console.log(`ubicacion ${i} numero ingresado ${num2[i]}`)
};
