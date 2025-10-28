function curry(fn) {
  return function carried(...args) {
    if(args.length >= fn.length){
        return fn.apply(this, args);
    } else {
        return function (...nextArgs){
            return carried.apply(this, args.concat(nextArgs));
        }
    }
  };
}

function sum(a, b) {
  return a + b;
}

const curryingSum = curry(sum);

// console.log(curryingSum(2)(5));











function runTests() {
  const tests = [];
  let passed = 0;
  let failed = 0;

  function test(description, testFn) {
    try {
      const result = testFn();
      tests.push({ description, passed: true, result });
      passed++;
      console.log(`✅ ${description}`);
    } catch (error) {
      tests.push({ description, passed: false, error: error.message });
      failed++;
      console.log(`❌ ${description}`);
      console.log(`   Error: ${error.message}`);
    }
  }

  // 📋 ТЕСТОВЫЕ СЛУЧАИ

  // 1. Базовые случаи
  test('Должен работать с двумя аргументами последовательно', () => {
    const result = curryingSum(2)(5);
    if (result !== 7) throw new Error(`Expected 7, got ${result}`);
    return result;
  });

  test('Должен работать с двумя аргументами сразу', () => {
    const result = curryingSum(2, 5);
    if (result !== 7) throw new Error(`Expected 7, got ${result}`);
    return result;
  });

  test('Должен работать с одним аргументом и затем вторым', () => {
    const firstCall = curryingSum(10);
    if (typeof firstCall !== 'function') throw new Error('First call should return function');
    
    const result = firstCall(20);
    if (result !== 30) throw new Error(`Expected 30, got ${result}`);
    return result;
  });

  // 2. Пограничные случаи
  test('Должен работать с нулями', () => {
    const result = curryingSum(0)(0);
    if (result !== 0) throw new Error(`Expected 0, got ${result}`);
    return result;
  });

  test('Должен работать с отрицательными числами', () => {
    const result = curryingSum(-5)(10);
    if (result !== 5) throw new Error(`Expected 5, got ${result}`);
    return result;
  });

  // 3. Множественные вызовы (цепочка)
  test('Должен поддерживать множественные вызовы с возвратом функций', () => {
    const step1 = curryingSum(1);
    const step2 = step1(2);
    
    if (typeof step1 !== 'function') throw new Error('Step 1 should be function');
    if (step2 !== 3) throw new Error(`Step 2 should be 3, got ${step2}`);
    
    return step2;
  });

  // 4. Проверка независимости экземпляров
  test('Разные вызовы должны быть независимы', () => {
    const sumA = curryingSum(5);
    const sumB = curryingSum(10);
    
    const resultA = sumA(3); // 8
    const resultB = sumB(4); // 14
    
    if (resultA !== 8) throw new Error(`Expected 8, got ${resultA}`);
    if (resultB !== 14) throw new Error(`Expected 14, got ${resultB}`);
    
    return [resultA, resultB];
  });

  // 5. Проверка контекста (this)
  test('Должен сохранять контекст вызова', () => {
    const obj = {
      value: 100,
      add: curry(function(a, b) {
        return a + b + this.value;
      })
    };
    
    const result = obj.add(5)(10);
    if (result !== 115) throw new Error(`Expected 115, got ${result}`);
    return result;
  });

  // 6. Проверка с другими функциями
  test('Должен работать с другими функциями', () => {
    function multiply(a, b) {
      return a * b;
    }
    
    const curriedMultiply = curry(multiply);
    const result = curriedMultiply(3)(4);
    
    if (result !== 12) throw new Error(`Expected 12, got ${result}`);
    return result;
  });

  // 7. Проверка с функциями разной арности
  test('Должен работать с функциями 3 аргументов', () => {
    function threeSum(a, b, c) {
      return a + b + c;
    }
    
    const curriedThreeSum = curry(threeSum);
    const result = curriedThreeSum(1)(2)(3);
    
    if (result !== 6) throw new Error(`Expected 6, got ${result}`);
    return result;
  });

  test('Должен работать со смешанными вызовами для 3 аргументов', () => {
    function threeSum(a, b, c) {
      return a + b + c;
    }
    
    const curriedThreeSum = curry(threeSum);
    const result1 = curriedThreeSum(1, 2)(3);
    const result2 = curriedThreeSum(1)(2, 3);
    const result3 = curriedThreeSum(1, 2, 3);
    
    if (result1 !== 6) throw new Error(`Expected 6, got ${result1}`);
    if (result2 !== 6) throw new Error(`Expected 6, got ${result2}`);
    if (result3 !== 6) throw new Error(`Expected 6, got ${result3}`);
    
    return [result1, result2, result3];
  });

  // 8. Стресс-тест
  test('Должен работать с большим количеством каррированных вызовов', () => {
    function fourSum(a, b, c, d) {
      return a + b + c + d;
    }
    
    const curriedFourSum = curry(fourSum);
    const result = curriedFourSum(1)(2)(3)(4);
    
    if (result !== 10) throw new Error(`Expected 10, got ${result}`);
    return result;
  });

  // 📊 Результаты
  console.log('\n📊 ИТОГИ:');
  console.log(`Всего тестов: ${tests.length}`);
  console.log(`Пройдено: ${passed}`);
  console.log(`Упало: ${failed}`);
  
  if (failed === 0) {
    console.log('🎉 Все тесты прошли успешно!');
  } else {
    console.log('💥 Есть проблемы в реализации каррирования');
  }

  return tests;
}

// 🚀 Запуск тестов
runTests();