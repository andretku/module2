/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    isEmail(str) {
        let arr = str.split('')
        if(arr.length > 7 &&
            arr.includes('@') &&
            arr.includes('.') &&
            arr.indexOf('@') > 2 &&
            arr.indexOf('.') > 4
            ) {
                return true
            }
        return false
    }
    isDomain(str) {
        let arr = str.split('')
        if(arr.length > 4 &&
            arr.includes('.') &&
            arr.indexOf('.') > 3 &&
            arr.indexOf('.') < (arr.length - 2) &&
            !arr.includes(',')
            ) {
                return true
            }
        return false
    }

}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.tu'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

module.exports = Validator;
