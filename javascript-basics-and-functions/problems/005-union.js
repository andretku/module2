/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function union(a, b) {
    let result = []
    a.map(elem => {
        if(b.find(e => e === elem)) {           // проверка наличия во втором массиве
            if(result.includes(elem)) return    // проверка одинаковых чисел
            result.push(elem)                   // добавление в новый массив
        }
    })
    result.sort((a,b) => a-b)                   // сортировка

    return result;
}
console.log(union([1, 2, 3], [11, 0, -1]))

module.exports = union;
