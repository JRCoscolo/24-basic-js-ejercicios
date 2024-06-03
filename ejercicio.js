//Ejercicio 17
//- Eliminar Duplicados
// Dado un array `randomNumbers` con números aleatorios, crea una función para eliminar los duplicados

let fruits = ["manzana", "banana", "naranja"]
let numbers = [1, 2, 3, 4, 5]
let randomNumbers = [1, 2, 3, 3, 4, 5, 5, 6]
let uniqueNumbers = [...new Set(randomNumbers)] //Aquí va recorriendo el array 
//y discrimina el valor duplicado, lo hace con una nueva variable, 
//y un array que tiene una operación dentro
console.log(uniqueNumbers)