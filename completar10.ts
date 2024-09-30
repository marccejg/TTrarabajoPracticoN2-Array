/*Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99

• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.*/
console.clear();
import * as fs from 'readline-sync';
let aleatorio: number[] = new Array(10);
let top: number = aleatorio.length;

for (let i = 0; i < top; i++) {
    aleatorio[i] = Math.round(Math.random() * 10)
};
console.log(aleatorio);
