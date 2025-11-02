function createLRUCache(maxSize = 100) {
  const cache = new Map();

  return {
    get: (key) => {
      if (!cache.has(key)) return null;

      // Обновляем порядок использования
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);

      return value;
    },

    set: (key, value) => {
      if (cache.has(key)) {
        cache.delete(key);
      } else if (cache.size >= maxSize) {
        // Удаляем самый старый элемент
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }

      cache.set(key, value);
    },

    size: () => cache.size,
  };
}

// Использование
const lruCache = createLRUCache(3);

lruCache.set("a", 1);
lruCache.set("b", 2);
lruCache.set("c", 3);
lruCache.get("a"); // Обновляет порядок
lruCache.set("d", 4); // Удаляет 'b' (самый неиспользуемый)

console.log(lruCache.get("b")); // null
