//Ejercicio 18
//- Encontrar Elementos Comunes
// Dado dos arrays `array1` y `array2`, encuentra los elementos comunes entre ellos.

let fruits = ["manzana", "banana", "naranja"]
let numbers = [1, 2, 3, 4, 5]
let randomNumbers = [1, 2, 3, 3, 4, 5, 5, 6]
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let commonElements = array1.filter((value) => array2.includes(value))// Aquí la variable es una operación.
//el primero filtra el "value" del primer array
//y luego lo compara con la inclusión de ese mismo valor y después devuelve los valores coincidentes.
console.log(commonElements)