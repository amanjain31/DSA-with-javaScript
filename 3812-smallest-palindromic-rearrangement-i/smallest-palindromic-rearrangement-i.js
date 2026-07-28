/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let freq = new Array(26).fill(0);

    // Count frequency
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let left = "";
    let middle = "";

    // Build left half and middle
    for (let i = 0; i < 26; i++) {
        left += String.fromCharCode(i + 97).repeat(Math.floor(freq[i] / 2));

        if (freq[i] % 2 === 1) {
            middle = String.fromCharCode(i + 97);
        }
    }

    let right = left.split("").reverse().join("");

    return left + middle + right;
};