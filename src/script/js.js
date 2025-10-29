// // Базовые случаи
// console.log(Number("123"));     // 123
// console.log(Number("123z"));    // NaN
// console.log(Number(""));        // 0
// console.log(Number(" "));       // 0
// console.log(Number("12.34"));   // 12.34
// console.log(Number("0xFF"));    // 255 (шестнадцатеричное)
// console.log(Number("010"));     // 10 (НЕ восьмеричное!)

// // Специальные значения
// console.log(Number(null));      // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(true));      // 1
// console.log(Number(false));     // 0

// // Объекты и массивы
// console.log(Number({}));        // NaN
// console.log(Number([]));        // 0
// console.log(Number([5]));       // 5
// console.log(Number([1, 2]));    // NaN

// // Неявное преобразование (арифметические операторы)
// console.log(+"123");            // 123
// console.log(+"123z");           // NaN
// console.log("123" - 0);         // 123
// console.log("123" * 1);         // 123
// console.log("123" / 1);         // 123

// // Базовые случаи
// console.log(String(123));       // "123"
// console.log(String(null));      // "null"
// console.log(String(undefined)); // "undefined"
// console.log(String(true));      // "true"
// console.log(String(false));     // "false"

// // Объекты и массивы
// console.log(String({}));        // "[object Object]"
// console.log(String([]));        // ""
// console.log(String([1, 2]));    // "1,2"
// console.log(String([, ,]));     // ",,"

// // Неявное преобразование
// console.log(123 + "");          // "123"
// console.log(null + "");         // "null"
// console.log(true + "");         // "true"
// console.log({} + "");           // "[object Object]"

// // Falsy значения (становятся false)
// console.log(Boolean(""));       // false
// console.log(Boolean(0));        // false
// console.log(Boolean(-0));       // false
// console.log(Boolean(NaN));      // false
// console.log(Boolean(null));     // false
// console.log(Boolean(undefined));// false
// console.log(Boolean(false));    // false

// // Truthy значения (становятся true)
// console.log(Boolean(" "));      // true
// console.log(Boolean("0"));      // true
// console.log(Boolean("false"));  // true
// console.log(Boolean([]));       // true
// console.log(Boolean({}));       // true
// console.log(Boolean(function() {})); // true

// // Логические операторы
// console.log(!!"hello");         // true
// console.log(!!0);               // false
// console.log(!"hello");          // false
// console.log(!0);                // true

// // Оператор +
// console.log(1 + "2");           // "12"
// console.log("2" + 1);           // "21"
// console.log(1 + 2 + "3");       // "33"
// console.log("1" + 2 + 3);       // "123"
// console.log(null + 1);          // 1
// console.log(undefined + 1);     // NaN

// // Другие арифметические операторы
// console.log("5" - 2);           // 3
// console.log("5" * "2");         // 10
// console.log("10" / "2");        // 5
// console.log("z" - 2);           // NaN

// // Сравнение
// console.log("5" == 5);          // true
// console.log("5" === 5);         // false
// console.log(null == undefined); // true
// console.log(null === undefined);// false
// console.log(0 == false);        // true
// console.log("" == false);       // true

// // valueOf и toString
// const obj1 = {
//     valueOf() { return 42; },
//     toString() { return "hello"; }
// };
// console.log(Number(polymorphicObj));         // 42   (использует valueOf)
// console.log(String(polymorphicObj));         // "hello" (использует toString)
// console.log(polymorphicObj + 10);            // 52   (арифметика → valueOf)
// console.log("Message: " + polymorphicObj);   // "Message: hello" (конкатенация → toString)

// const obj2 = {
//     toString() { return "99"; }
// };
// console.log(Number(obj2));      // 99
// console.log(obj2 + 1);          // "991"

// // Массивы
// console.log([] + []);           // ""
// console.log([] + {});           // "[object Object]"
// console.log({} + []);           // "[object Object]""
// console.log([1] + [2]);         // "12"

// // Date объекты
// const date = new Date();
// console.log(Number(date));      // 1761559255189
// console.log(String(date));      // "Mon Oct 27 2025 13:00:55 GMT+0300 (Москва, стандартное время)"

// // Функции
// function test() { return 5; }
// console.log(Number(test));      // NaN
// console.log(String(test));      // "function test() { return 5; }"

// // Экзотические значения
// console.log(Number(Infinity));  // Infinity
// console.log(String(Infinity));  // "Infinity"
// console.log(Boolean(Infinity)); // true

// console.log(0 == "0");          // true
// console.log(0 == []);           // true
// console.log("0" == []);         // false

// // Попробуйте предсказать результаты:
// console.log([] == ![]);         // true
// console.log({} + []);           // "[object Object]"
// console.log(false == []);       // true
// console.log(null > 0);          // false
// console.log(null == 0);         // false
// console.log(null >= 0);         // true
// console.log("b" + "a" + +"a" + "a"); // baNaNa

// // Цепочки преобразований
// const a = { valueOf: () => 1 };
// const b = { toString: () => "2" };
// console.log(a + b);             // "12"
// console.log(a - b);             // -1

// + склонен к строковой конкатенации
// Другие арифметические операторы преобразуют к числам
// == выполняет неявное преобразование, === - нет
// Объекты преобразуются через valueOf() и toString()
// Пустые массивы и строки ведут себя по-разному в разных контекстах


// 1) 1 битовые значения (булевы)
// 0 // true
// 1 // false
// В JavaScript обычно используются так:
// const bit = 1; // или 0
// if (bit) {
//     console.log("Бит установлен");
// }

// 2) 2-х битные значения
// 00 // 0 в двоичной = 0 в десятичной \ false
// 01 // 1 в двоичной = 1 в десятичной \ true
// 10 // 2 в двоичной = 2 в десятичной \ true
// 11 // 3 в двоичной = 3 в десятичной \ true
// В коде могут встречаться как:
// const state = 2; // 10 в двоичной - например, "состояние 2 из 4"

// 3) 4-битные значения
// 4 бита = 2⁴ = 16 комбинаций (0-15)
// 0000 = 0   1000 = 8
// 0001 = 1   1001 = 9
// 0010 = 2   1010 = 10
// 0011 = 3   1011 = 11
// 0100 = 4   1100 = 12
// 0101 = 5   1101 = 13
// 0110 = 6   1110 = 14
// 0111 = 7   1111 = 15
// Часто используются для:
// const hexDigit = 0xA; // 1010 в двоичной = 10 в десятичной
// const nibble = 0b1101; // 13 в десятичной (бинарный литерал в JS)

// 4) 8 бит = 2⁸ = 256 значений (0-255)
// Примеры в разных системах счисления:
// 00000000 = 0 = 0x00
// 00001010 = 10 = 0x0A
// 11111111 = 255 = 0xFF
// 10000000 = 128 = 0x80
// В JavaScript:
// const byte = 255; // максимальное значение байта
// const asciiCode = 65; // код символа 'A' в ASCII
// const colorComponent = 0xFF; // компонент цвета (0-255)

// 5) 16 бит = 2¹⁶ = 65,536 значений (0-65,535)
// 0000000000000000 = 0 = 0x0000
// 1111111111111111 = 65,535 = 0xFFFF
// 1000000000000000 = 32,768 = 0x8000
// Примеры использования:
// const unicodeChar = 0x03A9; // символ Ω (Omega) в Unicode
// const portNumber = 8080;    // номер порта в сетевом программировании
// const shortInt = 32767;     // максимальное значение для signed short

// 6) 32 бита = 2³² = 4,294,967,296 значений
// 00000000000000000000000000000000 = 0 = 0x00000000
// 11111111111111111111111111111111 = 4,294,967,295 = 0xFFFFFFFF
// В JavaScript:
// const maxUint32 = 0xFFFFFFFF; // 4,294,967,295
// const ipAddress = 0xC0A80101; // 192.168.1.1 в hex
// const rgbColor = 0xFF00FF;    // цвет magenta в RGB


// 8-битные значения в операциях
// const a = 0b10101010; // 170
// const b = 0b11001100; // 204

// console.log(a.toString(2).padStart(8, '0')); // "10101010"
// console.log(b.toString(2).padStart(8, '0')); // "11001100"

// Побитовое И
// console.log((a & b).toString(2).padStart(8, '0')); // "10001000"

// Побитовое ИЛИ  
// console.log((a | b).toString(2).padStart(8, '0')); // "11101110"

// RGB цвет как 24-битное значение
// const red = 0xFF0000;    // 11111111 00000000 00000000
// const green = 0x00FF00;  // 00000000 11111111 00000000  
// const blue = 0x0000FF;   // 00000000 00000000 11111111

// Извлечение компонентов (8-битные части)
// const color = 0x3498DB;
// const r = (color >> 16) & 0xFF; // 52
// const g = (color >> 8) & 0xFF;  // 152  
// const b = color & 0xFF;         // 219

// 8-битные флаги разрешений
// const READ = 0b00000001;    // 1
// const WRITE = 0b00000010;   // 2  
// const EXECUTE = 0b00000100; // 4

// let permissions = READ | WRITE; // 0b00000011 (3)

// Проверка флагов
// if (permissions & READ) {
//     console.log("Есть право на чтение");
// }

// Шестнадцатеричные литералы (часто 8, 16, 32 бита)
// 0xFF      // 8 бит
// 0xFFFF    // 16 бит  
// 0xFFFFFFFF // 32 бита

// Бинарные литералы (явно показывают биты)
// 0b1010    // 4 бита
// 0b10101010 // 8 бит
// 0b1010101010101010 // 16 бит

// Константы с характерными значениями
// const MAX_UINT8 = 255;    // 8 бит
// const MAX_UINT16 = 65535; // 16 бит

// JavaScript использует 32-битные числа для побитовых операций
// const bigNumber = 0x12345678; // 305419896 (32 бита)

// Но результат побитовых операций всегда 32-битный знаковый
// console.log((0xFFFFFFFF >> 0)); // -1 (знаковое представление)

// Для больших чисел используйте BigInt
// const bigValue = 0x123456789ABCDEFn; // 64 бита и больше

// Ключевые признаки в задачах:
// Числа от 0 до 255 → вероятно 8 бит
// Числа от 0 до 65,535 → вероятно 16 бит
// Шестнадцатеричные значения с 2 цифрами → 8 бит
// Шестнадцатеричные с 4 цифрами → 16 бит
// Шестнадцатеричные с 8 цифрами → 32 бита
// Использование побитовых операций (&, |, ^, ~, <<, >>) :

// & - Побитовое И. Сравнивает соответствующие биты двух чисел. Возвращает 1 если оба бита равны 1. 
// | - Побитовое ИЛИ. Сравнивает соответствующие биты двух чисел. Возвращает 1 если хотя бы один бит равен 1.
// ^ - Побитовое Исключающее ИЛИ / XOR. Сравнивает соответствующие биты двух чисел. Возвращает 1 если биты разные.
// ~ - Побитовое НЕ. Инвертирует все биты числа (0 становится 1, 1 становится 0).
// << - Сдвиг влево. Сдвигает биты числа влево на указанное количество позиций. Пустые биты справа заполняются нулями.
// >> - Сдвиг вправо. Сдвигает биты вправо, сохраняя знак числа. Пустые биты слева заполняются значением знакового бита.
// >>> (Беззнаковый сдвиг вправо / Unsigned right shift). Сдвигает биты вправо, игнорируя знак. Пустые биты слева всегда заполняются нулями.



// const str = "Яблоко яблоко яблоко";
// console.log(str.replace('яблоко', 'апельсин'));
// console.log(str.replaceAll('яблоко', 'апельсин'));

// const regex = /яблоко/i;
// console.log(str.replace(regex, 'апельсин'));
// console.log(str.replaceAll(regex, 'апельсин'));

// const regex2 = /яблоко/gi;
// console.log(str.replace(regex2, 'апельсин'));
// console.log(str.replaceAll(regex2, 'апельсин'));

// console.log(0 || 1 && 2 || 3);


// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a == b)


// console.log(0 || "" || 2 || undefined || true || false); // 2

// let arr = [];
// arr[1] = 1;
// arr[3] = 33;
// console.log(arr) // [empty, 1, empty, 33]

// for(let i=0; i<10; i++) {
//   console.log(i);
// }
// i = ? 
// нет такой функции

// f.call(null); // this = null в строгом режиме и window\global в нестрогом

// function f() {
//   alert(this);
// }


// let str = "Hello";
// str.something = 5;
// alert(str.something); // undefined в не строгом режиме и ошибка в строгом.


// // Symbol \ Symbol.toPrimitive
// const user = {
//     name: "Alice",
//     age: 30,
//     [Symbol.toPrimitive](hint){
//         if(hint === "number") {
//             return this.age;
//         }
//         if(hint === 'string') {
//             return this.name;
//         }
//         return `${this.name} (${this.age})`; // 'default'
//     }
// }

// console.log(+user); // Вызов с hint='number' -> 30
// console.log(`${user}`); // Вызов с hint='string' -> "Alice"
// console.log(user + ""); // Вызов с hint='default' -> "Alice (30)"
// console.log(user.toString()); // "[object Object]"

