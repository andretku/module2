/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    let min = 0
    let max = 0
    if(x < y) {
        min = x
        max = y
    }
    else {
        min = y
        max = x
    }

    if((max-min) > 5) {
        let a = max - 13
        return Math.abs(a - min) - 1
    }
    return max - min - 1
}
console.log(metro(1, 11))

module.exports = metro;
