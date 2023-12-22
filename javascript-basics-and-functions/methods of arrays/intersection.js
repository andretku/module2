/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */
function intersect(arr1, arr2) {
    let result = []
    arr1.map(elem => {
        if(arr2.find(el => el === elem)) {
            result.push(elem)
        }
    })
    return result
}
console.log(intersect([1,2,3,4,5,6], [2,4,5,7,8,9,5,4,5,4]))
