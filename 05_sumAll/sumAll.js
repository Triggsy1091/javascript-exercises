const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    var sum = 0;
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    rangeArray = [];

    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }

    rangeArray.forEach((value) => {
        sum += value;
    });

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
