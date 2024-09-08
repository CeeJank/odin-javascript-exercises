const fibonacci = function(fibo) {
    
    
    if (fibo < 0) return "OOPS";
    if (fibo == 0) return 0;
    
    let fib1 = 1;
    let fib2 = 0;
    
    for (let i = 2; i <= fibo; i++){
        let  fib = fib1 + fib2;
        fib2 = fib1;
        fib1 = fib;
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
