var bidimensional = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

var tridimensional = [[[01,02,03], [04,05,06], [07,08,09]], [[11, 12, 13], [14, 15,06], [17, 18, 19]], [[21, 22, 23], [24, 25,06], [27, 28, 29]]]



console.log("Vamos con la bidimensional")
for (let i = 0; i < bidimensional.length; i++) {
    for (let j = 0; j < bidimensional[i].length; j++) {
        console.log(bidimensional[i][j]);
    }
}

console.log("Ahora la tridimensional")
for (let i = 0; i < tridimensional.length; i++) {
    for (let j = 0; j < tridimensional[i].length; j++) {
        for (let z = 0; z < tridimensional[j].length; z++) {
            console.log(tridimensional[i][j][z]);
        }
    }
}