// Глубокое копирование объекта с помощью рекурсии в JavaScript можно реализовать, написав функцию, которая проходит по всем свойствам исходного объекта. Если свойство является примитивным типом данных, оно просто копируется; если это объект или массив, функция рекурсивно вызывает саму себя для копирования этого вложенного объекта

function deepClone(obj) {
    // Базовый случай: если это не объект или null, просто возвращаем значение
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    // Определяем, массив это или объект, и создаем соответствующий пустой объект
    const clone = Array.isArray(obj) ? [] : {};

    // Перебирает свойства исходного объекта
    for(const key in obj){
        // Проверяем, является ли свойство собственным свойством объекта (а не унаследованным)
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            // Рекурсивно вызываем deepClone для значения свойства
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

const copiedObject = deepClone(obj);
copiedObject.b.c = 99;
copiedObject.b.d.push(5);

console.log("Оригинал:", originalObject);
console.log("Копия:", copiedObject);