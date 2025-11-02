function useDijkstra(graph) {
  const [routes, setRoutes] = useState({});

  const calculateRoutes = useCallback(
    (start) => {
      const distances = {};
      const visited = new Set();
      const queue = [];

      for (const vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
      }

      queue.push({ vertex: start, distance: 0 });

      while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);
        const { vertex: current } = queue.shift();

        if (visited.has(current)) continue;
        visited.add(current);

        for (const neighbor in graph[current]) {
          if (visited.has(neighbor)) continue;

          const newDistance = distances[current] + graph[current][neighbor];

          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            queue.push({ vertex: neighbor, distance: newDistance });
          }
        }
      }

      setRoutes(distances);
      return distances;
    },
    [graph]
  );

  return { routes, calculateRoutes };
}

// Пример использования в компоненте
function NavigationComponent({ locations, roads }) {
  const graph = useMemo(() => {
    const g = {};
    // Создаем граф из пропсов
    // ... логика построения графа
    return g;
  }, [locations, roads]);

  const { routes, calculateRoutes } = useDijkstra(graph);

  return (
    <div>
      <button onClick={() => calculateRoutes("Home")}>
        Рассчитать маршруты от дома
      </button>
      <pre>{JSON.stringify(routes, null, 2)}</pre>
    </div>
  );
}
