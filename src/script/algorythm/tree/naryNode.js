// Дерево, где каждый узел может иметь произвольное количество потомков.
// N-арное дерево (n-ary tree)
class NaryNode {
    constructor(value) {
        this.value = value;
        this.children = []; // произвольное количество потомков
    }
}