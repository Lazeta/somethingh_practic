// Поиск кратчайшего пути от начальной вершины до всех остальных во взвешенном графе.
// Сложность: O(V + E log V)

function dijkstra(graph, start) {
  // Создаем объект для хранения кратчайших расстояний
  const distances = {};
  // Создаем объект для отслеживания посещенных вершин
  const visited = new Set();
  // Простая приоритетная очередь на массиве
  const queue = [];

  // Инициализируем расстояния
  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }

  queue.push({ vertex: start, distance: 0 });

  while (queue.length > 0) {
    // Сортируем очередь по расстоянию и берем минимальное
    queue.sort((a, b) => a.distance - b.distance);
    const { vertex: current, distance: currentDistance } = queue.shift();

    // Если уже посещали эту вершину, пропускаем
    if (visited.has(current)) continue;

    visited.add(current);

    // Обновляем расстояния до соседей
    for (const neighbor in graph[current]) {
      if (visited.has(neighbor)) continue;

      const distanceToNeighbor = currentDistance + graph[current][neighbor];

      if (distanceToNeighbor < distances[neighbor]) {
        distances[neighbor] = distanceToNeighbor;
        queue.push({ vertex: neighbor, distance: distanceToNeighbor });
      }
    }
  }

  return distances;
}

// Пример графа (взвешенный)
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 1, D: 5 },
  C: { A: 2, B: 1, D: 8, E: 10 },
  D: { B: 5, C: 8, E: 2 },
  E: { C: 10, D: 2 },
};

console.log(dijkstra(graph, "A")); // { A: 0, B: 3, C: 2, D: 8, E: 10 }
