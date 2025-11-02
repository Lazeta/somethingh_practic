function createTTLCache(ttlMs = 60000) {
  const cache = new Map();

  const isExpired = (timestamp) => Date.now() - timestamp > ttlMs;

  return {
    set: (key, value) => {
      cache.set(key, {
        value,
        timestamp: Date.now(),
      });
    },

    get: (key) => {
      const item = cache.get(key);
      if (!item) return null;

      if (isExpired(item.timestamp)) {
        cache.delete(key);
        return null;
      }

      return item.value;
    },

    cleanup: () => {
      for (const [key, item] of cache.entries()) {
        if (isExpired(item.timestamp)) {
          cache.delete(key);
        }
      }
    },
  };
}

// Использование
const sessionCache = createTTLCache(5000); // 5 секунд

sessionCache.set("token", "abc123");
console.log(sessionCache.get("token")); // 'abc123'

setTimeout(() => {
  console.log(sessionCache.get("token")); // null
}, 6000);
