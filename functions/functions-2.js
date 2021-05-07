function fullName(name, surname, age) {
    return 'Hello, ' + surname + ' ' + name + '. You ' + age + 'old';
}

function yearBirth(currentYear, age) {
    return 'Your year of birth -' + currentYear - age;
}

function more(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function pow(a, b) {
    for (let i = 1; i < b; i++) {
        a = a * a;
    }
}

module.exports = {
    fullName: fullName,
    yearBirth: yearBirth,
    more: more,
    pow: pow
}