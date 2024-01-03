/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if(seconds === 0) return `just now`
    if(seconds === 1) return `${seconds} second ago`
    if(seconds > 1 && seconds < 60) return `${seconds} seconds ago`
    if(seconds >= 60 && seconds < 120) return `${Math.floor(seconds/60)} minute ago`
    if(seconds >= 60 && seconds < 3600) return `${Math.floor(seconds/60)} minutes ago`
    if(seconds >= 3600 && seconds < 7200) return `${Math.floor(seconds/3600)} hour ago`
    if(seconds >= 7200 && seconds < 86400) return `${Math.floor(seconds/3600)} hours ago`
    if(seconds >= 86_400 && seconds < 172_800) return `${Math.floor(seconds/86400)} day ago`
    if(seconds >= 172_800 && seconds <= 2_419_200) return `${Math.floor(seconds/172_800)} days ago`
    if(seconds > 2_419_200) return undefined
}
console.log(timeago(1113600))

module.exports = timeago;
