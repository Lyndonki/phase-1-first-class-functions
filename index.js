function receivesAFunction(callback) {
    callback();
}

const returnsANamedFunction = function () {
    return returnsANamedFunction
}

function returnsAnAnonymousFunction() {
    return function () {

    };
}
returnsAnAnonymousFunction;