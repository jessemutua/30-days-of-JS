/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

    return function() {
        return n++
    };
};

const counter = createCounter(10)
var result = [];

result.push(counter()) // 10
result.push(counter())
result.push(counter())
result.push(counter())
console.log(result)