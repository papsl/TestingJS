var Math = function () {
    var internalCount = 0;

    function add(left, right) {
        return left + right;
    }

    function add5(number) {
        return number + 5;
    }

    function internal() {
        return internalCount;
    }

    function internalSet(number) {
        internalCount = number;
    }

    return {
        add: add,
        add5: add5,
        internal: internal,
        internalSet: internalSet
    };
};