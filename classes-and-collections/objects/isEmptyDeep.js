/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

 function isEmptyDeep(obj) {
    for (const key in obj) {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        if (!isEmptyDeep(obj[key])) {
          return false;
        }
      } else if (obj[key] !== undefined) {
        return false;
      }
    }
    return true;
  }

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
