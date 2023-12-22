/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    let firstArr = x.split(':')
    let firstTime = +firstArr[2] + +firstArr[1]*60 + +firstArr[0]*3600

    let secondArr = y.split(':')
    let secondTime = +secondArr[2] + +secondArr[1]*60 + +secondArr[0]*3600

    return secondTime - firstTime
}
console.log(getTimeDelta('01:19:30', '01:20:20'))

module.exports = getTimeDelta;
