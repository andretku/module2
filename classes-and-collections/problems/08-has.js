/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    let result = Object.keys(object)
    for(let key in object) {
        if(typeof object[key] === 'object') {
            let b = Object.keys(object[key])
            result.push(...b)
        }
    }
    if(JSON.stringify(path) === JSON.stringify(result)) return true
    return false;
}

console.log(has(['o', 'a'], { o: { a: 2 } }))

module.exports = has;

