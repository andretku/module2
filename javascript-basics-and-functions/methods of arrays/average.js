/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */
function average(arr) {
    let result = arr.reduce((acc, elem) => acc + elem, 0) / arr.length
    return result
}
console.log(average([6,4,5,5]))