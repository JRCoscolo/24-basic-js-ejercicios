//Ejercicio 13
//- Uso de Métodos Básicos
//Crea un array llamado `numbers` con los números del 1 al 5
//Usa el método `map` para crear un nuevo array que contenga el cuadrado de cada número
//Usa el método `filter` para crear un nuevo array que contenga solo los números mayores que 2

let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map((num) => num * num) //Aquí metemos el método "map"
let greaterThanTwo = numbers.filter((num) => num > 2) //Y aquí discriminamos los números mayores que 2
console.log(squares)
console.log(greaterThanTwo)