/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {
    let sum = 0;
    let maxi = -Infinity


    for(let i = 0; i< arr.length; i++){
        sum += arr[i];

        if(sum > maxi){
            maxi = sum;
        }

        if(sum < 0){
            sum = 0
        }
    }

    return maxi;
};