/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let arr = color.split('')
    let result = []
    if(arr.length === 7) {
        for (let i = 1; i < arr.length; i=i+2) {
            let a = parseInt((color[i] + color[i+1]), 16)
            result.push(a)
        }
    } else if(arr.length === 4) {
        for (let i = 1; i < arr.length; i++) {
            let a = parseInt((color[i] + color[i]), 16)
            result.push(a)
        }
    } else {
        throw new Error('You write a wrong color')
    }
    let b = `rgb(${result.join(', ')})`

    return b;
}

console.log(hexToRgb('#800080'))
module.exports = hexToRgb;

