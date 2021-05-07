let {
    sumOfNumbers,
    myFunction
} = require('./index')

test('Проверка функции sumOfNumbers()', function() {
    expect(sumOfNumbers([1, 2, 3, 4, 5])).toBe(15);
    expect(sumOfNumbers([5, 4, 3, 2, 1])).toBe(15);
    expect(sumOfNumbers([10, 15, 32, 156, 90, 7])).toBe(310);
    expect(sumOfNumbers('hello')).toBe(undefined);
    expect(sumOfNumbers(true)).toBe(undefined);
    expect(sumOfNumbers([1, 2, 'fdd', true])).toBe(-1);
    expect(sumOfNumbers([])).toBe('пустой массив, нечего подсчитывать');
})

test("bad description of test", function() {
    expect(myFunction("hello")).toBe("olleh");

    expect(myFunction("")).toBe("");

    expect(myFunction(1234)).toBeUndefined();

    expect(myFunction()).toBeUndefined();
});

test('test for function minOnArray()', function() {
    expect(minOnArray([2, 3, 1, 4, 6, 7])).toBe(1);
    expect(minOnArray([10, 342, 24, 35, 25, 1343])).toBe(10);
    expect(minOnArray([32, -1, 234, 134, 53])).toBe(-1);
})

test('test for function minLengthOnArray()', function() {
    expect(minLengthOnArray(['hello', 'world', 'hey', 'i'])).toBe('i');
    expect(minLengthOnArray(['into', 'code', 'learn', 'js'])).toBe('js');
    expect(minLengthOnArray(['css', 'html', 'algoritm', 'react'])).toBe('css');
})

test('test for function sortArray()', function() {
    expect(sortArray([2, 3, 1, 4, 6, 7])).toEqual([1, 2, 3, 4, 6, 7]);
    expect(sortArray([10, 342, 24, 35, 25, 1343])).toEqual(10, 24, 25, 35, 342, 1343);
    expect(sortArray([32, -1, 234, 134, 53])).toEqual([-1, 32, 53, 134, 234]);
})

test('test for function minusArray()', function() {
    expect(minusArray([-2, 3, 1, -4, 6, 7])).toEqual([-2, -4]);
    expect(minusArray([10, -342, -24, 35, -25, 1343])).toEqual(-342, -24, -25);
    expect(minusArray([32, -1, 234, 134, 53])).toEqual([-1]);
})