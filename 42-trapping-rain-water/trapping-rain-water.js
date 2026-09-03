/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let left = [];
    let right = [];

    let leftMax = arr[0];
    left[0] = leftMax;
    let rightMax = arr[arr.length - 1];
    right[arr.length - 1] = rightMax;


    for(let i = 1; i < arr.length; i++){
        leftMax = Math.max(leftMax, arr[i]);
        left[i] = leftMax;
    }

    for(let i = arr.length - 2; i >= 0; i--){
        rightMax = Math.max(rightMax, arr[i]);
        right[i] = rightMax;
    }

    let totelUnitOfWater = 0;

    for(let i = 0; i < arr.length; i++){
        totelUnitOfWater += Math.min(left[i], right[i]) - arr[i];
    }

    return totelUnitOfWater;
};