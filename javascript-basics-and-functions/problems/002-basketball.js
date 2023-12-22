/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-36']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let firstTeam = 0
    let secondTeam = 0
    points.map(elem => {
        let compare = elem.split('-')
        if(compare[0] > compare[1]) firstTeam++
        if(compare[0] < compare[1]) secondTeam++
    })
    if(firstTeam > secondTeam) return 1
    if(firstTeam < secondTeam) return 2
    else return undefined;
}
console.log(getWinner(['23-26', '24-30', '30-27', '35-36']))  // 2


module.exports = getWinner;
