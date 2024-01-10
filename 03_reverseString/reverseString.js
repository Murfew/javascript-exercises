const reverseString = function(word) {
    const chars = word.split("")
    let result = ""

    for (let i = chars.length - 1; i > -1; i--) {
        result += chars[i]
    }

    return result
};

// Do not edit below this line
module.exports = reverseString;
