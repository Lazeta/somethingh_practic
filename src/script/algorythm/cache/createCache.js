function createCache() {
    const cache = new Map();
    
    return {
        get: (key) => cache.get(key),
        set: (key, value) => cache.set(key, value),
        has: (key) => cache.has(key),
        clear: () => cache.clear(),
        size: () => cache.size
    };
}

// Использование
const cache = createCache();

function expensiveOperation(n) {
    if (cache.has(n)) {
        console.log('Из кеша:', n);
        return cache.get(n);
    }
    
    console.log('Вычисляем:', n);
    const result = n * n * n; // сложные вычисления
    cache.set(n, result);
    return result;
}

console.log(expensiveOperation(10)); // Вычисляем: 10 → 1000
console.log(expensiveOperation(10)); // Из кеша: 10 → 1000