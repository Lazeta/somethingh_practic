// const nearestSq = (n) => {
//     let root = Math.floor(Math.sqrt(n));
//     let lowerSq = root ** 2
//     let upperSq = (root + 1) ** 2
//     if(root ** 2 === n) return n;
//     else {
//         if(lowerSq <= upperSq){
//             return lowerSq;
//         } 
//         else return upperSq
//     } 
// }

// console.log(nearestSq(1))
// console.log(nearestSq(3))
// console.log(nearestSq(4))
// console.log(nearestSq(5))
// console.log(nearestSq(7))
// console.log(nearestSq(8))
// console.log(nearestSq(9))

// let birthday = new Date(2020, 11, 20);
// let copy = new Date();
// // console.log(copy.getTime())
// console.log(birthday)


let nums = [1,1,1,2,3,1,2,1,1,2,2,3,4,5,5,6,6,6,6,7,8,8,9,8];
let newNums = nums.reduce((first, second) => first + second);
// console.log(newNums)


let arr = [false, 'red', 0, 2, '', null, true, NaN, undefined];
let newArr = arr.filter(Boolean);
// console.log(newArr)


let cars = ['Honda', 'Toyota', 'Seat', 'Opel', 'VW', 'BMW', 'Audi'];
let obj = {...cars}
// console.log(obj)
cars.splice(0,2, 'Nissan', 'Tesla')
// console.log(cars)
let newCars = [
    {car: 'Honda', color: 'Red'},
    {car: 'Toyota', color: 'Green'},
    {car: 'Opel', color: 'white'},
    {car: 'BMW', color: 'Blue'},
]
let carName = Array.from(newCars, ({car, color}) => car)
// console.log(carName)

let nums2 = [1,1,1,2,3,1,2,1,1,2,2,3,4,5,5,6,6,6,6,7,8,8,9,8];
// let uniNums = [...new Set(nums2)];
let uniNums = Array.from(new Set(nums2))
// console.log(uniNums)
// очищение массива
nums2 = []
// правильное очищение массива
nums2.splice(0, nums.length)

const number1 = [12, 14, 16, 17, 18, 20, 22, 24, 25, 26]
const number2 = [11, 13, 16, 15, 17, 19, 22, 21, 23, 25]
// найти схожесть чисел массива и вывести лишь уникальные числа.
let findNumber = [...new Set(number1)].filter(item => number2.includes(item))
// console.log(findNumber)
// console.log(number2.lastIndexOf(15))
let new_fill = new Array(10).fill(1)
console.log(new_fill)