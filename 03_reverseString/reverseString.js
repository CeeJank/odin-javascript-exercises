const reverseString = function(string) {
    let arr = string.split("");
    let newarr = "";
    for (let i = arr.length-1; i >= 0; i--){
        newarr+=arr[i];
    }
    return newarr;
};

// Do not edit below this line
module.exports = reverseString;
