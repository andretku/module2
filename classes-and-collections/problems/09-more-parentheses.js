/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    let arr = value.split('')
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    arr.forEach(elem => {
        if(elem.charCodeAt() === 40) a++
        if(elem.charCodeAt() === 41) b++
        if(elem.charCodeAt() === 123) c++
        if(elem.charCodeAt() === 125) d++
        if(elem.charCodeAt() === 60) e++
        if(elem.charCodeAt() === 62) f++
    })
    if(a === b && c === d && e === f) return true
    return false;
}

console.log(parentheses('<>)'))

module.exports = parentheses;

// console.log('>'.charCodeAt()) //40 41 123 125 60 62