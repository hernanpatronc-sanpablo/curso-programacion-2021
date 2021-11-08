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
var nota1 = 8
var nota2 = 10

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

if (promedio >= 6) {
    console.log("Se lleva el diploma")
    if (promedio >= 9) {
        console.log("Se lleva diploma de honor")
        if (aprobo) {
            console.log("")
        }
    }
} else {
    console.log("A llorar a la iglesia")
}

