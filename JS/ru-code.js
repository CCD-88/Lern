/**
 * Задание
Вам даны три константы с фамилиями разных людей. Составьте и выведите на экран слово из символов в таком порядке:

Третий символ из первой строки
Второй символ из второй строки
Четвертый символ из третьей строки
Пятый символ из второй строки
Третий символ из второй строки
 */

const one = "Naharis";
const two = "Mormont";
const three = "Sand";

// BEGIN (write your solution here)

const four = one[2] + two[1] + three[3] + two[4] + two[2];
console.log(four);

// END
//console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`); Решение учителя

//-----------------------------------------------------------------------------------------------------------------------------------------------

/**
Выведите на экран результат выражения: 7 - (-8 - -2). Попробуйте сделать число 7 не числом, а строкой.
 */
//Решение учителя:
console.log('7' - (-8 - -2));
//Ваше решение:

const a = '7' - (-8 - -2)
console.log(a)

//-----------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Задание
В коде программы определены две константы, содержащие имена компаний. Посчитайте их общую длину в символах и выведите ее на экран.
 */
//Решение учителя:
import { length } from 'hexlet-basics/string';

const company1 = 'Apple';
const company2 = 'Samsung';

// BEGIN
const company1Length = length(company1);
const company2Length = length(company2);

console.log(company1Length + company2Length);
// END


//Ваше решение:
import { length } from 'hexlet-basics/string';

const company1 = 'Apple';
const company2 = 'Samsung';

// BEGIN (write your solution here)
const sumResult = company1 + company2;

console.log(sumResult.length)
// END