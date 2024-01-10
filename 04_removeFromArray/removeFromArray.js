const removeFromArray = function(array, ...toRemove) {
    
    for (let i = 0; i < toRemove.length; i++) {
        let indexToRemove = array.indexOf(toRemove[i])

        if (indexToRemove == -1) {
            continue
        }

        array.splice(indexToRemove, 1)
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
