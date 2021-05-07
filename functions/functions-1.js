function div(a, b) {
    return a / b;
}

function add(a) {
    return a * a;
}

function printName(name) {
    return 'hello, ' + name;
}

function mod(a, b) {
    return a % b;
}

module.exports = {
    div: div,
    add: add,
    printName: printName,
    mod: mod
}