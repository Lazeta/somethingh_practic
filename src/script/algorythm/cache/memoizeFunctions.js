// Универсальный мемоизатор
function memoize(fn) {
    const cache = new Map();
    
    return (...args) => {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Пример использования
const fibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // 55
console.log(fibonacci(10)); // Берется из кеша