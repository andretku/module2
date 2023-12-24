/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    let splitList = []
    list.map(elem => {
        splitList.push(elem.split(':').join(''))
    })

    splitList.sort((a,b) => a-b)

    let result = []
    splitList.map(elem => {
        result.push(`${elem.slice(0,2)}:${elem.slice(2,4)}:${elem.slice(4,6)}`)
    })

    return console.log(result);
}
sortTimestamps(['23:02:59', '02:07:00'])

module.exports = sortTimestamps;
