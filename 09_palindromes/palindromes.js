const palindromes = function (word) {
    let chars = []

    for (let i = 0; i < word.length; i++) {
        if (isAlphanumeric(word[i])) {
            chars.push(word[i].toLowerCase())
        }
    }

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

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str)
}

// Do not edit below this line
module.exports = palindromes;
