// Union Types (Типы-объединения)
// Синтаксис: тип1 | тип2 | тип3
// Переменная может быть string ИЛИ number
let id: string | number;
id = "abc123"; // OK
id = 456; // OK
// id = true; // ERROR: Type 'boolean' is not assignable to type 'string | number'.

// Функция принимает number ИЛИ string
function printId(id: (number | string)[]) {
    console.log(`ID: ${id}`);
}
printId(["123", 123, "base64"]); 

// function printId(id: number | string) {
//     console.log(`ID: ${id}`);
// }
// printId("1231"); 

// function printId(id: number | string) {
//     console.log(`ID: ${id}`);
// }
// printId(1); 

// function printId(id: number[] | string) {
//     console.log(`ID: ${id}`);
// }
// printId([1, 2, 3]); 

// function printId(id: number[] | string[]) {
//     console.log(`ID: ${id}`);
// }
// printId(["123", "456", "789"]); 

// C массивами
let array: (number | string)[] = [1, "hello", 2, "world"];

// С проверкой типов (type narrowing)
function processValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase(); // TypeScript знает, что здесь value - string
    } else {
        return value.toFixed(2); // TypeScript знает, что здесь value - number
    }
}




// _____________________________________
// Intersection Types (Типы-пересечения)
// Что это: Комбинируют несколько типов в один, объединяя все их свойства.
// Синтаксис: тип1 & тип2 & тип3
interface Person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: string;
    department: string;
}
// Пересечение двух интерфейсов
type EmployeePerson = Person & Employee;
const john: EmployeePerson = {
    name: "John",
    age: 30,
    employeeId: "123",
    department: "Sales"
}
// С примитивными типами (редко используется)
type Never = string & number; // type Never = never (невозможный тип)



// _____________________________________
// Literal Types (Литеральные типы)
// Синтаксис: конкретное_значение
type UserRole = "admin" | "user" | "guest";
type StatusCode = 200 | 404 | 500;
function logValue<T extends string>(value: T){
    console.log(value);
}
logValue("123"); // OK
// logValue(123); // ERROR, а если было extends number, то было бы OK
// ✅ Явно указываем тип
const role: UserRole = "admin";
logValue(role); // T = "admin" (подтип string)
// ✅ Или так
logValue("admin" as UserRole); // T = UserRole




// _____________________________________
// Type Aliases (Псевдонимы)
// Синтаксис: type имя_псевдонима = тип
type UserType = {
    id: number;
    name: string;
}
type StringOrNumber = string | number;
type AdminUser = UserType & { permissions: string[] }




// _____________________________________
// generic types
function printId2<T extends number | string>(id: T[]) {
    console.log(`ID: ${id}`);
}
printId2(["123", 123, "base64"]); // отрабатывает любой вариант с строкой или числом, но лишь в массиве
// пояснение:
// T extends number | string - значит, что T должен быть совместим с типом number | string, либо их подтипом
// T[] - значит, что T может быть массивом, id ожидает массив с типом T




// _____________________________________
// generic types
let unknownValue: unknown = "hellossssss";

// Требует проверки типа перед использованием
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // OK
}

// unknownValue.toUpperCase(); // Error без проверки
console.log(unknownValue); // но консоль выводит и без проверки также