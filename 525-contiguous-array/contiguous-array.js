/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();

    map.set(0, -1);

    let maxlength = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        count += nums[i] === 1 ? 1 : -1;

        if(map.has(count)){
            maxlength = Math.max(maxlength, i - map.get(count))
        }else{
            map.set(count, i)
        }
    }

    return maxlength;
};