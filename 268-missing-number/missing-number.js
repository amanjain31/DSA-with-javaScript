/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let expectedSum = (arr.length * (arr.length + 1)) / 2;
    let actualSum = 0;

    for(let j = 0; j < arr.length; j++){
        actualSum += arr[j]
    }

    return Math.abs(expectedSum - actualSum);
};