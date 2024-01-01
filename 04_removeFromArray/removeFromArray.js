const removeFromArray = function(array, ...args) {
    const updatedArray = array.filter(item => !args.includes(item));

    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
