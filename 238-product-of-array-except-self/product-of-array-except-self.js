/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let left = new Array(n);
    let right = new Array(n);

    left[0] = 1;
    right[n - 1] = 1

    for(let i = 1; i < n; i++){
        left[i] = left[i - 1] * nums[i - 1]
    }

    for(let i = n -2; i >= 0; i--){
        right[i] = right[i + 1] * nums[i + 1]
    }

    const result = [];

    for(let i = 0; i < n; i++){
        let product = left[i] * right[i];
        result.push(product);
    } 
    return result;
};