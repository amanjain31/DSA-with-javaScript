/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
    let ans = 0;

    for(let num of arr){
        ans = ans ^ num;
    }

    return ans;
};