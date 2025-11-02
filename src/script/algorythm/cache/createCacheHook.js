// Имитация хука useMemo
function useMemo(compute, deps) {
  const cache = new Map();
  const key = JSON.stringify(deps);

  if (!cache.has(key)) {
    cache.set(key, compute());
  }

  return cache.get(key);
}

// Пример компонента
function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log("Фильтруем...");
    return items.filter((item) => item.includes(filter));
  }, [items, filter]); // Пересчитываем только при изменении items или filter

  return filteredItems;
}
