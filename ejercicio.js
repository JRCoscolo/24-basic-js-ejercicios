//Ejercicio 10
//- Rotar una Matriz 90 Grados
//Escribe una función que rote una matriz cuadrada 90 grados en el sentido de las agujas del reloj

let colors = ["rojo", "verde", "azul", "amarillo"]
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function rotarmatrix(matrix) {
    let n = matrix.length;
    let rotado = []; //Dejamos hueco para que la posición nos la vaya marcando el bucle
    for (let i = 0; i < n; i++) {
        rotado[i] = []; //Dejamos hueco para que la posición nos la vaya marcando el bucle
        for (let j = 0; j < n; j++) {
            rotado[i][j] = matrix[n - j - 1][i];
        }
    }
    return rotado;
}

let matrixrotada = rotarmatrix(matrix)
console.log(matrixrotada)

// Queda anotado que la función "i" determina la cacheta del array, y 
//la "j" la posición del elemento de dicho array.