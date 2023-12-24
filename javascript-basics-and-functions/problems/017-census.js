/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let male = list.filter(elem => elem.gender === 'Male')
    let ages = []
    for (let i = 0; i < male.length; i++) {
        ages.push(male[i].age)
    }
    let max = Math.max(...ages)
    let index = ages.indexOf(max)

    return index + 1;
}
console.log(census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) )

module.exports = census;
