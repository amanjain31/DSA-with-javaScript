/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i <= arr.length; i++){
        sum1 += i;
    }

    for(let j = 0; j < arr.length; j++){
        sum2 += arr[j]
    }

    return Math.abs(sum1 - sum2);
};