//Ejercicio 5
//- Recorrer un Array Simple.
//Usa un bucle `for` para imprimir todos los elementos del array `colors`


let colors = ["rojo", "verde", "azul", "amarillo"]
let matrix = [[1,2,3], [4,5,6], [7,8,9]]
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
