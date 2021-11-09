// VARIABLES
// Me guardan un cachito de información en la memoria
// El nombre de la variable no tiene que empezar con numero
// No tiene espacios
// No tiene caracteres especiales salvo el guion bajo
// Empiezan con minúscula, no obligatorio pero buena práctica

var nombre = "Hernán";

var apellido;
apellido = "Patron Costas";

var nombre_y_apellido = "Hernán Patrón Costas"

nombre_y_apellido = 'Juan Carlos'

// TODA VARIABLE TIENE UN TIPO
// Vamos a ver 3 tipos de variables
// String (texto), int y float (numeros) y booleano (veradero o falso)
// Las comillas indican variables de tipo texto
// 25 != "25"
var edad = 25;
var promedio = 8.75;

var esMayorDeEdad = true;
// true != "true"
var nota1 = 3
var nota2 = 6

// Operadores
// console.log(nota1 + nota2)
var promedio = ((nota1 + nota2) / 2);

var resto = 5 % 3

var numero = 191;

var esPar = numero % 2 == 0;

// console.log(promedio)
var nombre_completo = nombre + " " + apellido

nombre = "Juan Carlos"

// console.log(nombre_completo)

// Comparadores -> todos dan un booleano de resultado (true o false)
// >, <, >=, <=, ==, !=, &&, ||
var aprobo = promedio >= 6;

var pasoRaspando = promedio == 6;
// console.log(pasoRaspando)
edad = edad + 1
edad += 1
edad++

// if (promedio >= 6) {
//     console.log("Se lleva el diploma")
// } else {
//     if (promedio >= 5) {
//         console.log("Recuperatorio")
//     } else {
//         console.log("A llorar a la iglesia")
//     }
// }
console.log("Voy a empezar")

// for (var i = 0; i < 100; i++) {
//     if (i < 33) {
//         console.log("Estoy al princpio")
//     } else if (i < 66) {
//         console.log("Estoy en el medio")
//     } else {
//         console.log("Estoy al final")
//     }
// }

// for (var i = 0; i < edad; i++) {
//     console.log("Cumpli ", i, " años")
// }

// for (var i = 10; i >= 0; i--) {
//     console.log(i)
// }

for (var i = 1 /* Esto primero*/; i < 100 /* chequeo esto segundo. Vuelvo a este chequeo 5to*/; i = i + 1 /* Ejecuto esto cuarto. y esto septimo */) {
    console.log(i) // Si me da si, ejecturo esto tercero. Si me da si, despues esto sexto......
}
// Si en cualquier caso me da no, vengo acá

console.log("Termine")

// Arrays (arreglos o listas) -> cuarto tipo de variable
//                 0        1        2       3
var alumnos = ["Mosca", "Agus", "Huevo", "Peter"];
var edades = [28, 18, 24, 24];

console.log(alumnos.length)

var elemento = 1;

// console.log(alumnos[elemento])

// for (var i = 0; i < alumnos.length; i++) {
//     if (alumnos[i] == "Nanu") {
//         console.log("Encontré a huevo en la posición " + i)
//     }
// }

var notas = [9, 3, 5, 10]

var min = notas[0] // min vale 9
// notas.length vale 4
for (var i = 0; i < alumnos.length; i++) {
    // i vale 0. Ahora i vale 1. Ahora i vale 2. Ahora i vale 3. Ahora i vale 4, no se ejecuta porque 4 no es menor a 4
    // notas[i] == notas[0] == 9. Ahora notas[i] vale 3. notas[i] vale 5. notas[i] vale 10
    if (notas[i] < min) {
        min = notas[i] // Ahora min vale 3
    }
}
// viene acá

console.log(min) // imprime 3

var max = notas[0]
for (var i = 0; i < notas.length; i++) {
    if (notas[i] > max) {
        max = notas[i]
    }
}
console.log(max)

var min_index = 0
for (var i = 0; i < alumnos.length; i++) {
    if (notas[i] < notas[min_index]) {
        min_index = i
    }
}
console.log("El alumno con la peor nota es " + alumnos[min_index] + " que esta en la posicion " + min_index + " y se saco un " + notas[min_index])  // imprime 3