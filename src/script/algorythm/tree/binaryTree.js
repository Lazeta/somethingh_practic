// Структура данных, где каждый узел имеет не более двух потомков (левый и правый).

// Бинарное дерево (binary tree)
class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;   // максимум 2 потомка
        this.right = null;
    }
}