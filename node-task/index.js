function sumOfNumbers(list) {
    let result = 0;
    if (typeof list !== 'object') {
        return undefined
    } else if (list.length === 0) {
        return 'пустой массив, нечего подсчитывать'
    }
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number') {
            return -1
        }
        result += list[i]
    }
    return result;
}

function myFunction(str) {
    if (typeof str === 'string') {
        return str.split("").reverse().join("");
    }
}

module.exports = {
    sumOfNumbers: sumOfNumbers,
    myFunction: myFunction
};