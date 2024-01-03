/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
const isEqualDeep = (obj1, obj2) => {

let rec = (obj) => {
    let e = Object.entries(obj).flat()
    for(let i of e) {
        if(typeof i === 'object') {
            return rec(i)
        }
    }
}


    let e1 = Object.entries(obj1).flat()
    let e2 = Object.entries(obj2).flat()

    for(let i of e1) {
        if(typeof i === 'object') {
            return i = Object.entries(i)

        }

    }

    return e1
};
const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
