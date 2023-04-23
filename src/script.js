// import TypeScript from './types'
// import React from 'react';
// const object = {
//     name: 'Zam',
//     "name 2": 'Zam 2',
//     age: 28,
//     isStudent: false,
//     isWorking: true,  
//     address: {
//         streetTitle: 'Pobeda 42',
//         city: {
//             title: 'Gomel',
//             countryTitle: 'Belarus',
//         }
//     },
//     technologies: [
//         'HTML', 'CSS', 'Git', 'JavaScript', 'NodeJS', 'React', 'Webpack'
//     ],
//     technologies_obj: [ 
//     {
//         id: 1,
//         title: 'HTML'
//     }, 
//     {
//         id: 2,
//         title: 'CSS'
//     }, 
//     {
//         id: 3,
//         title: 'Git'
//     }, 
//     {
//         id: 4,
//         title: 'JavaScript'
//     }, 
//     {
//         id: 5,
//         title: 'NodeJS'
//     }, 
//     {
//         id: 6,
//         title: 'React'
//     }, 
//     {
//         id: 7,
//         title: 'Webpack'
//     } ],
// }

const myTable = {
    name: 'computer table',
    create: '08.03.2023',
    cost: 250,
    things: {
        PC: {
            title: 'CASE POWERCASE',
            isProcessor: true,
            processor: 'AMD Ryzen 7 5700G with Radeon Graphics',
            processorPower: 4.30,
            isVideoCard: false,
            videoCard: '',
            iSOperativeMemory: true,
            nameOZU: 'Fury 16GB',
            OperativeMemory: 16.0,
            typeSistem: 'operating sistem',
            bitSistem: 64,
            isMotherboard: true,
            Motherboard: 'TUF Gaming Pro 2',
            isPowerUnit: true,
            powerUnit: 'be quete 550W',
            isSSD: true,
            SSD: 'Samsung 980 PRO',
            isHDD: true,
            HDD: 'Baracuda 1TB',
            isProcessorCuller: true,
            processorCuller: 'Aigo Towering',
            isCullerHub: true,
            cullerHub: 'Power Case HUB',
            numberOfCullers: 6,
            isMusicColumn: true,
            Model: 'A511',
            keyboard: 'defender MaYhem',
            mouse: 'defender shock',
            monitor: 'PHILIPS 227E led',
            headphones: 'defender'
        },
        organizer: {
            color: 'white',
            size: 60,
            things: [
            {
                id: 1,
                title: 'pen',
                color: 'blue'
            },
            {
                id: 2,
                title: 'pen 2',
                color: 'blue'
            },
            {
                id: 3,
                title: 'pen 3',
                color: 'black'
            },
            {
                id: 4,
                title: 'comb',
                color: 'white'
            },
            {
                id: 5,
                title: 'construction knife',
                color: 'blue'
            },
        ]},
    },
}


// console.log(object['name 2'])
// console.log(object.name)
// console.log(object.age)
// console.log(object['isStudent'])
// console.log(object.isStudent)
// console.log(object.address.streetTitle)
// console.log(object.address.city.countryTitle)
// console.log(object.technologies[2])
// console.log(object.technologies_obj[2*2])
// console.log(object.technologies_obj[6].id)
// console.log(object.technologies_obj[6].title)


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