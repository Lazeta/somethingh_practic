function createNavigationSystem() {
  const graph = {};

  return {
    addLocation: (name) => {
      if (!graph[name]) graph[name] = {};
    },

    addRoad: (from, to, distance, bidirectional = true) => {
      graph[from][to] = distance;
      if (bidirectional) {
        graph[to][from] = distance;
      }
    },

    findShortestRoute: (start, end) => {
      const distances = {};
      const previous = {};
      const visited = new Set();
      const queue = [];

      // Инициализация
      for (const location in graph) {
        distances[location] = location === start ? 0 : Infinity;
        previous[location] = null;
      }

      queue.push({ vertex: start, distance: 0 });

      while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);
        const { vertex: current } = queue.shift();

        if (visited.has(current)) continue;
        if (current === end) break;

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

      // Восстанавливаем маршрут
      const route = [];
      let current = end;

      while (current !== null) {
        route.unshift(current);
        current = previous[current];
      }

      return {
        distance: distances[end],
        route: route.length > 1 ? route : [],
        isValid: distances[end] !== Infinity,
      };
    },
  };
}

// Пример использования навигационной системы
const nav = createNavigationSystem();

// Добавляем локации
["Home", "Work", "Store", "Park", "Gym"].forEach(nav.addLocation);

// Добавляем дороги
nav.addRoad("Home", "Store", 3);
nav.addRoad("Home", "Park", 7);
nav.addRoad("Store", "Work", 5);
nav.addRoad("Store", "Gym", 8);
nav.addRoad("Park", "Gym", 2);
nav.addRoad("Work", "Gym", 4);

console.log(nav.findShortestRoute("Home", "Gym"));
// { distance: 9, route: ['Home', 'Park', 'Gym'], isValid: true }
