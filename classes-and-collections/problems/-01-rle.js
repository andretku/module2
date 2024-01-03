/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {

    let result = [value[0]]
    let count = 1
    for(let i=1; i<value.length; i++) {
        if(value[i] === value[i-1]) {
            count = count + 1
        }
        else {
            if(count === 1) {
                result.push(value[i])
            } else {
                
            }



        }
    }

    return result;
}

console.log(rle('AAAaaB'))

module.exports = rle;

