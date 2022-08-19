/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //es
//s
const myObject = { //e
  x: 10,
  y: true,
}

myObject.z = 'abc' //es

delete myObject.x //es

let newVariables //s

newVariable = 30 + 5 //es

console.log(newVariable) //s

if (newVariable > 10) { //es
  console.log(`${newVariable} больше 10`)
}
