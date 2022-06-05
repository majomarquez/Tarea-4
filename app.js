/*1. Función recursiva que realice lo siguiente:
a.Mostrar en consola los números del 1 al 100 de 1 en 1.
*/
const increase = (a) => {
    if (a > 100) return
    console.log(a)
    return increase(a + 1)
}
increase(1)

// Otra opcion pero con for
/*for (let number = 1; number <= 100; number++) {
 console.log(number);
}*/

// b.Mostrar en consola los números del 1000 al 500 de 2 en 2.
const decreasing = (a) => {
    if (a < 500) return
    console.log(a)
    return decreasing(a - 2)
}
decreasing(1000)

/*2. Hacer las funciones que sean necesarias para:
a.Obtener el promedio de notas de un alumno considerando que la
suma de notas debe ser el retorno de una función y el promedio
el retorno de otra función.Las notas son: 6, 8, 9, 2, 5, 10.*/

let exam = [6, 8, 9, 2, 5, 10];
let addition = 0
for (let i = 0; i < exam.length; i++) {
    addition += exam[i];
}
// console.log(addition);
let total = addition / exam.length;
console.log(total);





