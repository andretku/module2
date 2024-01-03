/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let arr = value.split('')
    let a = 0
    let b = 0
    arr.forEach(elem => {
        if(elem === '(') a++
        if(elem === ')') b++
    })
    if(a===b) return true
    return false;
}
console.log(parentheses('())'))

module.exports = parentheses;
