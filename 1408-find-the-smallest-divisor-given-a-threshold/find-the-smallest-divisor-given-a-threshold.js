/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

var isValid = function (nums, mid, threshold){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += Math.ceil(nums[i] / mid);
    }

    return sum <= threshold;
}

var smallestDivisor = function(nums, threshold) {
    let first = 1;
    let last = 0;
    let ans = -1;


    for(let i = 0; i < nums.length; i++){
        last = Math.max(nums[i], last);    
    }

    while(first <= last){
        let mid = Math.floor((first + last) / 2)

        if(isValid(nums, mid, threshold)){
            ans = mid;
            last = mid - 1;
        }else{
            first = mid + 1
        }
    }

    return ans;

};