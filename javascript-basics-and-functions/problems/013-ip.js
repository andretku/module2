/**
 * Для того чтобы выходить в Интернет, каждому компьютеру присваивается так называемый IP-адрес.
 * Он состоит из четырех целых чисел в диапазоне от 0 до 255, разделенных точками.
 * В следующих трех строках показаны три правильных IP-адреса:
 *  127.0.0.0
 *  192.168.0.01
 *  255.000.255.0255
 *
 * Напишите функцию isIpValid(address) опредяляющую является ли переданная строка правильным IP-адресом.
 *
 * Пример:
 *
 * isIpValid('127.0.0.1') === true
 * isIpValid('127.0.0.255') === true
 * isIpValid('127.0.256.0255') === false
 * isIpValid('Hello world') === false
 *
 * @param {string} address
 * @returns {boolean}
 */
function isIpValid(address) {
    let addrParts = address.split('.')
    if(addrParts.length !== 4) return false

    for (let i = 0; i < 4; i++) {
        if(addrParts[i].length > 3) return false

        let num = Number(addrParts[i])
        if(num < 0 || num > 255 || isNaN(num)) return false
    }
    return true;
}

console.log(isIpValid('127.0.0.0100'))

module.exports = isIpValid;


// console.log('ABC'.charCodeAt())  //46 48-57
// console.log(String.fromCharCode(47))