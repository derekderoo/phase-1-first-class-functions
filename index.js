function receivesAFunction(callback) {
    return callback();
}
function add() {
    return 1 + 2;
}
function returnsANamedFunction() {
    return add;
}
function returnsAnAnonymousFunction() {
    return function () {
        return 1 + 2;
    }
}