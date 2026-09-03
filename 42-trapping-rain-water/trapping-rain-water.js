/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    // optimized approch for this question 
    let left = 0, right = arr.length - 1, totel = 0;

    let leftMax = 0, rightMax = 0;

    while(left < right){
        leftMax = Math.max(leftMax, arr[left]);
        rightMax = Math.max(rightMax, arr[right]); 
        
        if(leftMax < rightMax) totel += leftMax - arr[left++];
        else totel += rightMax - arr[right--];
    }
    return totel;
};