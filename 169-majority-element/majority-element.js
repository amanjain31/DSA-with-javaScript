/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], (map.get(arr[i])) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let maxValue = 0;
    let finalAnswer = 0

    for (let [key, value] of map) {
        if (maxValue < value) {
            maxValue = value;
            finalAnswer = key;
        }
    }

    return finalAnswer;
};