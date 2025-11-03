// 1. Бинарный поиск
function binarySearch(arr, target){
    let left = 0, right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }
        if(target < arr[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        return -1;
    }
}

// 2. сортировка пузырьком
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 3. Быстрая сортировка
function quickSort(arr){
    if(arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    let middle = arr.filter(x => x === pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}


// 4. BFS для графа
function bfs(graph, start) { // graph - граф, start - начальная вершина
    let queue = [start], visited = new Set([start]); // множество посещенных вершин и очередь с вершинами
    while (queue.length) { // пока очередь не пуста 
        let node = queue.shift(); // берем вершину из очереди
        for (let neighbor of graph[node]) { // перебираем соседние вершины графа с вершиной node 
            if (!visited.has(neighbor)) { // если соседняя вершина не посещена 
                visited.add(neighbor); // добавляем ее в посещенные
                queue.push(neighbor); // добавляем ее в очередь
            }
        }
    }
    return visited; // возвращаем множество посещенных вершин
}