//Ejercicio 15
//- Reducir Arrays
//Usa el método `reduce` para calcular la suma de todos los elementos del array `numbers`

let fruits = ["manzana", "banana", "naranja"]
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((acc, num) => acc + num, 0) //va recorriendo el array
//dejándolo en "acc" y "num" y sumando ambos, luego lo recorre y devuelve el valor.
console.log(sum)