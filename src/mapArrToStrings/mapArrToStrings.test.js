import { mapArrToStrings } from "./mapArrToStrings";


describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']); // рекурсивно сравнивает свойство одного объекта с другим
    })
    test('Другое значение', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'word'])).toEqual(['1', '2', '3']);
    })
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1,2,3,4]); // Проверим чтобы стейт не был равен тому что ожидаем
    })
})