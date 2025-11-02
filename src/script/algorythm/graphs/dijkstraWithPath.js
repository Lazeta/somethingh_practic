function dijkstraWithPath(graph, start, end) {
  const distances = {};
  const previous = {};
  const visited = new Set();
  const queue = [];

  // Инициализация
  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    previous[vertex] = null;
  }

  queue.push({ vertex: start, distance: 0 });

  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const { vertex: current } = queue.shift();

    if (visited.has(current)) continue;
    if (current === end) break; // Нашли конечную вершину

    visited.add(current);

    for (const neighbor in graph[current]) {
      if (visited.has(neighbor)) continue;

      const newDistance = distances[current] + graph[current][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = current;
        queue.push({ vertex: neighbor, distance: newDistance });
      }
    }
  }

  // Восстанавливаем путь
  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    distance: distances[end],
    path: path.length > 1 ? path : [],
  };
}

// Пример использования
console.log(dijkstraWithPath(graph, "A", "E"));
// { distance: 10, path: ['A', 'C', 'D', 'E'] }
