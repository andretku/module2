/**

 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null
 и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * @param element - элемент для проверки
 * @returns {boolean}
 */

const isPlainObject = (el) => {
    if(el.toString() === '[object Object]') return true
    // if(el instanceof Object && !Array.isArray(el)) return true
    return false
};

const data = { a: 1 };
console.log(isPlainObject({ a: 1 })); // true
