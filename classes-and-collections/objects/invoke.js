/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

const invoke = (object, path, func, args) => {
    let pathElem = path.split('.')
    for (let i = 0; i < pathElem.length-1; i++) {
        object = object[pathElem[i]]

        let lastObj = object[pathElem[pathElem.length - 1]]

        if (Array.isArray(lastObj)) {
            return lastObj[func](...args)
        }
    }
};

const data = {a: {b: [1, 2, 3]}}
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

module.exports = invoke;
