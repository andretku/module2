/**
 * Функция, которая принимает на вход массив чисел и возвращает наименьшее и наибольшее число в массиве.
 * @param {number[]} arr - входной массив чисел
 * @return {number[]} - массив, содержащий наименьшее и наибольшее число в массиве
 */
function minMax(arr) {
    let min = arr.reduce((x,y) => Math.min(x,y))
    let max = Math.max(...arr)
    let result = `Min: ${min}, Max: ${max}`
    return result
}
console.log(minMax([1,2,3,4,5,6,7,8,9]))
