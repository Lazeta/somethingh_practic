function findShortestPath(matrix, start, end) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Проверяем валидность старта и финиша
    if (matrix[start[0]][start[1]] === 0 || matrix[end[0]][end[1]] === 0) {
        return { path: [], distance: -1, message: "Старт или финиш в тупике" };
    }
    
    // Направления движения: вверх, вправо, вниз, влево
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    // Очередь для BFS: [row, col, distance]
    const queue = [[start[0], start[1], 0]];
    
    // Матрица для отслеживания посещенных ячеек
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;
    
    // Матрица для хранения предыдущих ячеек (для восстановления пути)
    const prev = Array(rows).fill().map(() => Array(cols).fill(null));
    
    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();
        
        // Если достигли конечной точки
        if (row === end[0] && col === end[1]) {
            // Восстанавливаем путь
            const path = [];
            let current = [row, col];
            
            while (current !== null) {
                path.unshift(current);
                const [r, c] = current;
                current = prev[r][c];
            }
            
            return { path, distance, message: "Путь найден" };
        }
        
        // Проверяем все возможные направления
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            // Проверяем границы матрицы и доступность ячейки
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                matrix[newRow][newCol] === 1 && 
                !visited[newRow][newCol]) {
                
                visited[newRow][newCol] = true;
                prev[newRow][newCol] = [row, col];
                queue.push([newRow, newCol, distance + 1]);
            }
        }
    }
    
    return { path: [], distance: -1, message: "Путь не найден" };
}

// матрица смежности (добавил пути чтобы был возможен маршрут)
const matrix = [
    [0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
];

// Тестируем алгоритм
const start = [0, 1]; // Стартовая позиция (строка, столбец)
const end = [12, 5];  // Конечная позиция

const result = findShortestPath(matrix, start, end);
console.log(result.message);
console.log("Расстояние:", result.distance);
console.log("Путь:", result.path);