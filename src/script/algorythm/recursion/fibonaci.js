// Последовательность, где каждое число равно сумме двух предыдущих.
// 0, 1, 1, 2, 3, 5, 8, 13, ...
// сложность O(2ⁿ) экспоненциальная
const fibonacci = (n) => {
    if(n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(25))


// Сложность: O(n) - линейная!
function fibonacciMemo(n, memo = {}) {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);
    return memo[n];
}

console.log(fibonacciMemo(25))