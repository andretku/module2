/**
 * Функция, которая принимает на вход два объекта и возвращает новый объект, содержащий все свойства обоих объектов.
 * Если в обоих объектах есть свойства с одинаковыми именами, то значение из второго объекта должно быть сохранено.
 * @param {object} obj1 - первый объект
 * @param {object} obj2 - второй объект
 * @return {object} - новый объект, содержащий все свойства обоих объектов
 */
function mergeObjects(obj1, obj2) {
    let a = Object.entries(obj1)
    let b = Object.entries(obj2)
    let c = a.concat(b)
    let d = {}
    c.map(elem => {
        
    })
   return a
}

// Примеры:
// console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); // {a: 1, b: 2, c: 3, d: 4}
console.log(mergeObjects({x: "hello", y: "world"}, {y: "JavaScript", z: "rocks"})); // {x: "hello", y: "JavaScript", z: "rocks"}
// console.log(mergeObjects({foo: true, bar: false}, {foo: false, baz: true})); // {foo: false, bar: false, baz: true}
