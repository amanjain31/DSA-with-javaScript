/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // optimized solution using XOR
    let ans = 0;

    for(let char of s){
        ans ^= char.charCodeAt(0)
    }

    for(let char of t){
        ans ^= char.charCodeAt(0)
    }

    return String.fromCharCode(ans);
};