/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
    let a = 0
    let values = Object.values(object)
    if(values.length === 0) a++

    for(let key in object) {
        if (!Boolean(object[key]) && object[key] !== 0) a++
    }
    
    if(a === values.length) return true
    return false
};

const data = {};
const data2 = {a: undefined};
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
