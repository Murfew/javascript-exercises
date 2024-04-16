const palindromes = function (word) {
    let chars = word.split("")
    let lenEachHalf = Math.trunc(chars.length / 2)
    if (chars.length % 2 != 0) {
        chars.splice(lenEachHalf, 1)
    }

    let leftHalf = chars.slice(0, lenEachHalf)
    let rightHalf = chars.slice(lenEachHalf, chars.length).reverse()

    for (let i = 0; i < lenEachHalf; i++) {
        if (leftHalf[i] != rightHalf[i]) {
            return false
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
