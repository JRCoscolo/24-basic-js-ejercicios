//Ejercicio 7
//- Sumar Todos los Elementos de una Matriz.
//Escribe una función que reciba una matriz y devuelva la suma de todos sus elementos


let colors = ["rojo", "verde", "azul", "amarillo"]
let matrix = [[1,2,3], [4,5,6], [7,8,9]]
function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum
}

console.log(sumMatrix(matrix));
