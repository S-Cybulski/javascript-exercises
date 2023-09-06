const sumAll = function(start, end) {
    let sum = 0;

    if (start > end){
        let temp = start.valueOf();
        start = end;
        end = temp;
    }

    if (start < 0 || end < 0){
        return "ERROR"
    }
    else if(typeof(start) != Number || typeof(end) != Number){
        return "ERROR"
    }

    for (let i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
