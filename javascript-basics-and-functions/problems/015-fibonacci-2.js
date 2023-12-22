/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    let a = 0
    let b = 1
    let result
    if(value === 0) return 0
    for (let i = 1; i <= value; i++) {
        if(value === b) {
            result = i
            break
        }
        let c = a + b
        a = b
        b = c

    }
    return result
}
console.log(isFibonacci(55))

module.exports = isFibonacci;
