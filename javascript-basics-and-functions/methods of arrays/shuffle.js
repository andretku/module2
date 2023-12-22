/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr1) {
    return arr1.sort(() => Math.random() - 0.5)
}
console.log(shuffle([1, 2, 3, 4, 5]))