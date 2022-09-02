const reverseString = function(input) {

    let originalArray =[];
    let reversedArray = [];
    let reversedString ="";

    originalArray = Array.from(input);

    for (i = originalArray.length; i > 0; i--){
        reversedArray.push(originalArray[i-1]);
    }

    reversedString = reversedArray.join('');

    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
