/*1) Crear un arreglo de letras e imprimirlo

2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo.Imprimir el arreglo y si está o no en
él.*/
console.clear();
import * as fs from 'readline-sync';
let letras: string[] = new Array(5);
letras[0] = "a";
letras[1] = "b";
letras[2] = "c";
letras[3] = "d";
letras[4] = "e";
console.log(letras)

let nombre: string[] = new Array(5);
nombre[0] = "Juan"
nombre[1] = "Ines"
nombre[2] = "Luis"
nombre[4] = "Jose"
nombre[3] = "Raul"


let nombreBuscado: string = fs.question("Ingrese el nombre a buscar: ");

let resultado: string = "no encontrado";
for (let i: number = 0; i < nombre.length; i++) {
    if (nombre[i] === nombreBuscado)
        resultado = "encontrado";
}
console.log(resultado);
