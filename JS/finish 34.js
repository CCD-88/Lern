/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: "Mercedes",
    price: 200000,
    isAvailableForSale: false,
  },
  {
    carBrand: "Toyota",
    price: 100000,
    isAvailableForSale: false,
  },
  {
    carBrand: "Nissan",
    price: 700000,
    isAvailableForSale: true,
  },
];
// создал новый массив с одним объектом и тремя свойствами
const newCar = [{ carBrand: "Volvo", price: 233231, isAvailableForSale: true }];

cars.push(newCar); // Добавил еще один объект в конец массива

console.log(cars);
