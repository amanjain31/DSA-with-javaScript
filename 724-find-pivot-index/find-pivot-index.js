/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let totalSum = 0;
    let isFound = 0;

    for(let j = 0; j < nums.length; j++){
        totalSum += nums[j]
    }

    for(let i = 0; i < nums.length; i++){
        if(i !== 0){
            leftSum += nums[i - 1]
        }

        rightSum = totalSum - leftSum - nums[i];

        if(leftSum === rightSum) {
            isFound = true;
            return i;
        }
    }
    if(!isFound){
        return -1;
    }
};