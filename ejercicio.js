//Ejercicio 8
//- Transponer una Matriz
//Escribe una función que reciba una matriz y devuelva su transpuesta (intercambiar filas por columnas)


let colors = ["rojo", "verde", "azul", "amarillo"]
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function transponer(matrix) {
    let transpuesta = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transpuesta[i][j] = matrix[j][i];
        }
    }
    return transpuesta;
}

let transposedmatrix = transponer(matrix)
console.log(transposedmatrix)
