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


// let nums = [1,1,1,2,3,1,2,1,1,2,2,3,4,5,5,6,6,6,6,7,8,8,9,8];
// let newNums = nums.reduce((first, second) => first + second);
// // console.log(newNums)


// let arr = [false, 'red', 0, 2, '', null, true, NaN, undefined];
// let newArr = arr.filter(Boolean);
// // console.log(newArr)


// let cars = ['Honda', 'Toyota', 'Seat', 'Opel', 'VW', 'BMW', 'Audi'];
// let obj = {...cars}
// // console.log(obj)
// cars.splice(0,2, 'Nissan', 'Tesla')
// // console.log(cars)
// let newCars = [
//     {car: 'Honda', color: 'Red'},
//     {car: 'Toyota', color: 'Green'},
//     {car: 'Opel', color: 'white'},
//     {car: 'BMW', color: 'Blue'},
// ]
// let carName = Array.from(newCars, ({car, color}) => car)
// // console.log(carName)

// let nums2 = [1,1,1,2,3,1,2,1,1,2,2,3,4,5,5,6,6,6,6,7,8,8,9,8];
// // let uniNums = [...new Set(nums2)];
// let uniNums = Array.from(new Set(nums2))
// // console.log(uniNums)
// // очищение массива
// nums2 = []
// // правильное очищение массива
// nums2.splice(0, nums.length)

// const number1 = [12, 14, 16, 17, 18, 20, 22, 24, 25, 26]
// const number2 = [11, 13, 16, 15, 17, 19, 22, 21, 23, 25]
// // найти схожесть чисел массива и вывести лишь уникальные числа.
// let findNumber = [...new Set(number1)].filter(item => number2.includes(item))
// // console.log(findNumber)
// // console.log(number2.lastIndexOf(15))
// let new_fill = new Array(10).fill(1)
// // console.log(new_fill)


// const data = ({1: 'a', 2: 'b', 3: 'c'}) // [['1', '2', '3'], ['a', 'b', 'c']];
// function keysAndValues(data){
//     const result = [Object.keys(data), Object.values(data)];
//     return result
// }
// console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}))
// console.log(keysAndValues({'A': 1, 'B': 2, 'C': 3}))
// console.log(keysAndValues({}))
// console.log(keysAndValues({'': ''}))
// console.log(keysAndValues({" ": 1}))

// 1. Создание объекта и присвоение ему значений
const person = {
    name: 'Alex',
    id: 10
}
// console.log(person)

// 2. Создание копии объекта без мутации. 
// вызов новой переменной которую мы изменили на основе ссылки 
// на оригинал после вызываем и сам оригинал 
const person2 = Object.assign({
    name: 'Alex',
    id: 10
})
const newPerson2 = Object.assign({}, person2, {
    email: 'wdb@gmail.com'
})
// console.log(newPerson2)
// console.log(person2)

// 3. Определили объект, и переназначили значение ключа объекта изменив оригинал
const person3 = Object.assign({
    name: 'Alex',
    id: 10,
    email: 'wdb@gmail.com'
});

Object.assign(person3, {
    email: 'newWebDevblog@gmail.com'
})
// console.log(person3)

// 4. Вывели новый объект с добавленым ключём и значением.
const person4 = {
    name: 'Alex',
    id: 10
}
const newPrsn = {
    ...person4,
    address: 'USA, New York'
}
// console.log(person4)
// console.log(newPrsn)

// 5. Получаем массив со всеми ключами
// Получаем массив со всеми значениями
// console.log(Object.keys(newPrsn))
// console.log(Object.values(newPrsn))


// 6. Object.entries получаем многомерный массив объекта
// console.log(Object.entries(person3))

// 7. Object.freeze замораживает объект и свойства не могут быть удалены или изменены.
// Object.freeze(person3)
// person3.name = 'Ivanko';
// console.log(person3.name)

// 8. Object.seal предотвращает новых свойств к объекту, но допускает изменение существующих свойств
Object.seal(person3)
person3.name = 'Ivanko';
// console.log(person3)
// console.log(person3.name)


const newPrsn2 = Object.assign(person4);
const isEqual = Object.is(person4, newPrsn)
// console.log(isEqual)