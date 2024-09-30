/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo
[4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16]
    - Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
    - Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
////Array
let num: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
//Funciones
let mayor: number = 0;

let determinarMayor = (): number => {
    for (let i: number = 0; i < num.length; i++) {
        if (num[i] > mayor) {
            mayor = num[i];
        };
    }
    return mayor;
}
let esPar = (a: number): void => {
    if (a % 2 == 0) {
        console.log("el numero es par")
    } else { console.log("es impar") };

};
//resultados
let resultadoFinal = determinarMayor();
console.log(resultadoFinal);
esPar(resultadoFinal);
