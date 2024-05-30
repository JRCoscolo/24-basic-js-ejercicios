//Ejercicio 12
//- Modificar Arrays
//Añade "uva" al final del array `fruits`
//Cambia el segundo elemento del array a "kiwi"
//Elimina el primer elemento del array

let fruits = ["manzana", "banana", "naranja"];
fruits.push("uva") //push sirve para "empujar" un nuevo elemento al array, por defecto lo pondrá al final.
fruits[1] = "kiwi" //el cambio del valor de array es muy obvio aqui
fruits.shift() //la eliminación de un elemento de array, si no se pone nada, por defecto será el primero.
console.log(fruits)