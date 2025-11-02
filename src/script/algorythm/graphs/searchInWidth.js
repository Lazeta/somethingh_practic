// Поиск в ширину в графе

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

// Поиск в ширину в графе
function searchInWidth(graph, start, end) {
  let queue = [];
  queue.push(start)

  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue.push(...queue, ...graph[current]);
    }
  }
  return false
}

console.log(searchInWidth(graph, "a", "g"));
