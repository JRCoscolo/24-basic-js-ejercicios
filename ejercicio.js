//Ejercicio 16
//- Combinación de Arrays
//Crea un nuevo array combinando `fruits` y `numbers`
//Ordena el nuevo array en orden alfabético o numérico según corresponda

let fruits = ["manzana", "banana", "naranja"]
let numbers = [1, 2, 3, 4, 5]
let combined = fruits.concat(numbers);
combined.sort(); // ordena dando prioridad a los números y luego a los textos, pero no 
// en orden alfabético, si no en lexicográfico.
console.log(combined)