/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {

    // For this question, we basically follow three steps using **Kadane's Algorithm.

    // Step 1: We iterate through the array and add each `i`th element to the `sum`.

    // Step 2: After updating the `sum`, we compare it with our `max` value. If the current `sum` is greater than `max`, we update `max` with the current `sum`.
    
    // Step 3: Finally, we check whether the `sum` has become less than `0`. If it has, we reset `sum` to `0` because a negative sum will not help us create a larger subarray sum in the future.

    // This is the basic idea behind Kadane's Algorithm for finding the maximum subarray sum.

 
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