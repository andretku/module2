/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[str.length-1 - i]) result.push(1)
        else result.push(0)
    }
    if(result.includes(0)) return false
    return true
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
