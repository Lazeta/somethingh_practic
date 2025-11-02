// Вычисление произведения всех натуральных чисел от 1 до n.
// n! = 1 × 2 × 3 × ... × n
// Сложность: O(n) - линейная! Память - O(n) - стек
const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5))



// Сложность: O(n) - также линейная! Память - O(1)
function factorialIterative(n) {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5))