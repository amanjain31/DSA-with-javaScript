/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length, index = -1;

    for(let i = len - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]){
            index = i;
            break;
        }
    }

    if(index === -1) return nums.reverse();


    for(let i = len; i > index; i--){
        if(nums[i] > nums[index]){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    let left  = index + 1, right = len - 1;

    while(left <= right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--; 
    }
};