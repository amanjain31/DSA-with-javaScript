/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        arr[i] = sum;
    }

    return arr;
};