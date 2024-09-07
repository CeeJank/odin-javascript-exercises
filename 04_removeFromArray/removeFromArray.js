const removeFromArray = function(arr, ...args) {
    let newArray = [];
    arr.forEach((num) => {
        if (!args.includes(num)){
            newArray.push(num);
        }
    });
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
