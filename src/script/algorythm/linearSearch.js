function linearSearch (array, item){
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            return i;
        }
    }
    return null;
}

console.log(linearSearch([1, 2, 3, 4, 5], 4));
