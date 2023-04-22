const object = {
    name: 'Zam',
    "name 2": 'Zam 2',
    age: 28,
    isStudent: false,
    isWorking: true,  
    address: {
        streetTitle: 'Pobeda 42',
        city: {
            title: 'Gomel',
            countryTitle: 'Belarus',
        }
    },
    technologies: [
        'HTML', 'CSS', 'Git', 'JavaScript', 'NodeJS', 'React', 'Webpack'
    ],
    technologies_obj: [ 
    {
        id: 1,
        title: 'HTML'
    }, 
    {
        id: 2,
        title: 'CSS'
    }, 
    {
        id: 3,
        title: 'Git'
    }, 
    {
        id: 4,
        title: 'JavaScript'
    }, 
    {
        id: 5,
        title: 'NodeJS'
    }, 
    {
        id: 6,
        title: 'React'
    }, 
    {
        id: 7,
        title: 'Webpack'
    } ],
}





console.log(object['name 2'])
console.log(object.name)
console.log(object.age)
console.log(object['isStudent'])
console.log(object.isStudent)
console.log(object.address.streetTitle)
console.log(object.address.city.countryTitle)
console.log(object.address.city.countryTitle)