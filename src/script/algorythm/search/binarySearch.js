// Поиск в отсортированном массиве путем деления пополам на каждом шаге.
// Сложность: O(log n)
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let count = 0;

// Бинарный поиск O(log n) логарифмическая сложность
function binarySearch(array, item) { // O(log n) по времени и O(1) по памяти
    let left = 0;
    let right = array.length - 1;  // ✅ Правильные границы
    let middle;

    while (left <= right) {        // ✅ Условие выхода
        middle = Math.floor((left + right) / 2);
        
        if (array[middle] === item) {
            return middle;         // ✅ Найден
        }
        
        if (item < array[middle]) {
            right = middle - 1;    // ✅ Сужаем правую границу
        } else {
            left = middle + 1;     // ✅ Сужаем левую границу
        }
    }
    
    return -1;  // ✅ Не найден
}

console.log(binarySearch(array, 99));
console.log(count)





function binarySearchRecursive(array, item){ // 0(n log n) благодаря копированию массивов.
    let left = 0;
    let right = array.length;
    let middle = Math.floor((left + right)/2);
    count++;
    if(array[middle] === item){
        return middle;
    }
    if(item < array[middle]){
        return binarySearchRecursive(array.slice(0, middle), item);
    } else {
        return binarySearchRecursive(array.slice(middle + 1), item) + middle + 1;
    }
}

console.log(binarySearchRecursive(array, 99));
console.log(count)


// Бинарный поиск O(log n)
function binarySearchRecursiveBest(array, item, left = 0, right = array.length - 1) {
    count++;
    if (left > right) {
        return -1; // базовый случай - элемент не найден
    }
    
    let middle = Math.floor((left + right) / 2);
    
    if (array[middle] === item) {
        return middle; // элемент найден
    }
    
    if (item < array[middle]) {
        return binarySearchRecursiveBest(array, item, left, middle - 1); // ищем слева
    } else {
        return binarySearchRecursiveBest(array, item, middle + 1, right); // ищем справа
    }
}

console.log(binarySearchRecursiveBest(array, 99));
console.log(count)