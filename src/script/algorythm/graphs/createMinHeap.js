// Простая реализация Min-Heap для приоритетной очереди
function createMinHeap() {
  const heap = [];

  const getParentIndex = (i) => Math.floor((i - 1) / 2);
  const getLeftChildIndex = (i) => 2 * i + 1;
  const getRightChildIndex = (i) => 2 * i + 2;

  return {
    enqueue: (item) => {
      heap.push(item);
      let index = heap.length - 1;

      while (index > 0) {
        const parentIndex = getParentIndex(index);
        if (heap[parentIndex].distance <= heap[index].distance) break;

        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
      }
    },

    dequeue: () => {
      if (heap.length === 0) return null;
      if (heap.length === 1) return heap.pop();

      const min = heap[0];
      heap[0] = heap.pop();
      let index = 0;

      while (getLeftChildIndex(index) < heap.length) {
        let smallerChildIndex = getLeftChildIndex(index);
        const rightChildIndex = getRightChildIndex(index);

        if (
          rightChildIndex < heap.length &&
          heap[rightChildIndex].distance < heap[smallerChildIndex].distance
        ) {
          smallerChildIndex = rightChildIndex;
        }

        if (heap[index].distance <= heap[smallerChildIndex].distance) break;

        [heap[index], heap[smallerChildIndex]] = [
          heap[smallerChildIndex],
          heap[index],
        ];
        index = smallerChildIndex;
      }

      return min;
    },

    isEmpty: () => heap.length === 0,
  };
}

function dijkstraOptimized(graph, start) {
  const distances = {};
  const visited = new Set();
  const queue = createMinHeap();

  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }

  queue.enqueue({ vertex: start, distance: 0 });

  while (!queue.isEmpty()) {
    const { vertex: current } = queue.dequeue();

    if (visited.has(current)) continue;
    visited.add(current);

    for (const neighbor in graph[current]) {
      if (visited.has(neighbor)) continue;

      const newDistance = distances[current] + graph[current][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        queue.enqueue({ vertex: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

console.log(dijkstraOptimized(graph, "A"));
