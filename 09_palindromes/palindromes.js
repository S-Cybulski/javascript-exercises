const palindromes = function (word) {
    let forbiddenLetters = [',','!',' ','.']
    
    forbiddenLetters.forEach((letter) => {word = word.replaceAll(letter,'')});

    word = word.toLowerCase();

    let leftPointer = 0, rightPointer = word.length - 1, middle = (word.length + 1) / 2;

    for (let i = 0; i <= middle; i++){
        if (word[leftPointer] !== word[rightPointer]) return false;

        else {
            leftPointer += 1; 
            rightPointer -= 1;
        }
    }

    return true

}

// Do not edit below this line
module.exports = palindromes;
