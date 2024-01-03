/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    constructor(str) {
        this.str = str;
    }
    reverse() {
        return this.str.split('').reverse().join('');
    }
    ucFirst() {
        return this.str[0].toUpperCase() + this.str.slice(1);
    }
    ucWords() {
        let result = []
        let word = this.str.split(' ')
        word.map(el => {
            result.push(el[0].toUpperCase() + el.slice(1))
        });
        return result.join(' ')
    }
}

const str = new MyString('abcde abcjjde abcuuude');

// console.log(str.reverse()); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords()); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
