/**
 * Функция, которая принимает на вход массив строк и возвращает массив строк, содержащих только уникальные значения.
 * @param {string[]} arr - входной массив строк
 * @return {string[]} - массив строк, содержащий только уникальные значения
 */
function uniqueStrings(arr) {
    let unique = []
    arr.map(elem => {
        if(unique.includes(elem)) return
        unique.push(elem)
    })
    return unique
}
console.log(uniqueStrings(['hello', 'a', 'b', 'c', 'a', 'hello', 'world', 'b', 'c']))