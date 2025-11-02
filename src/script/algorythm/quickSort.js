const arr = [99, 1, 2, 58, 4, 62, 6, 7, 8, 9, 10, 11, 52, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 12, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 5, 53, 54, 55, 56, 57, 27, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 3, 100];
let count = 0;

// Быстрая сортировка или Сортировка Хуара. сложность O(n log n)
// function quickSort(array){
//     if(array.length <= 1){
//         return array;
//     }
//     let pivot = array[0];
//     let left = [];
//     let right = [];
//     for(let i = 1; i < array.length; i++){
//         count++;
//         if(array[i] < pivot){
//             left.push(array[i]);
//         } else {
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(arr));
// console.log('count = ', count);


// Быстрая сортировка сложность O(n log n), но в худшем случае O(n^2)
function quickSort2(array){
    if(array.length <= 1){
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for(let i = 0; i < array.length; i++){
        count++;
        if(i === pivotIndex) 
            continue;
        if(array[i] < pivot){
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort2(less), pivot, ...quickSort2(greater)];
}

console.log(quickSort2(arr));
console.log('count = ', count);