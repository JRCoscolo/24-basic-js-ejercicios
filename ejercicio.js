//Ejercicio 6
//- Recorrer un Arreglo.
//Usa un bucle `for` anidado para imprimir todos los elementos de la matriz `matrix`


let colors = ["rojo", "verde", "azul", "amarillo"]
let matrix = [[1,2,3], [4,5,6], [7,8,9]]
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
