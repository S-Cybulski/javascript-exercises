const fibonacci = function(num) {

    if (num <= 0){
        return "OOPS"
    }

    let fibArray = [];

    for (let i = 0; i < num; i++){
        if (fibArray.length === 0 || fibArray.length === 1){
            fibArray.push(1);
        }
        else {
            fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        }
    }
    return fibArray[fibArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
