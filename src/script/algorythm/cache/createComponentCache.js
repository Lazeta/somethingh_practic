// Кеш для тяжелых вычислений в компонентах
const createComponentCache = () => {
  const cache = new Map();

  return {
    compute: (componentId, props, computeFn) => {
      const key = `${componentId}:${JSON.stringify(props)}`;

      if (!cache.has(key)) {
        cache.set(key, computeFn());
      }

      return cache.get(key);
    },

    invalidate: (componentId) => {
      for (const key of cache.keys()) {
        if (key.startsWith(`${componentId}:`)) {
          cache.delete(key);
        }
      }
    },
  };
};

// Использование
const componentCache = createComponentCache();

function HeavyComponent({ filters, data }) {
  const processedData = componentCache.compute(
    "HeavyComponent",
    [filters, data.length], // зависимости
    () => {
      console.log("Обрабатываем данные...");
      return data.filter((item) => filters.every((filter) => filter(item)));
    }
  );

  return processedData;
}
