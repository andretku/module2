/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    let result = {}
    let arr = Object.keys(object)

    arr.filter(elem => {
        if(!args.includes(elem)) {
            return result[elem] = object[elem]
        }
    })

    return result
};

const data = {a: 1, b: 2, c: 3, d: 4};
console.log(without(data, 'b', 'c')); // { a: 1 }
