const repeatString = function(input, times) {
    let output ="";

    if(times >= 0){
        for(i=0; i < times; i++){
            output +=input;
        }
    } else {
        output = "ERROR";
    }



    return output;
};

// Do not edit below this line
module.exports = repeatString;
