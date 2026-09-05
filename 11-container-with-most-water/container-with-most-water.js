/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    // TC -> O(n) & SC -> O(1) 
    let maxArea = 0;
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let length = Math.min(arr[left], arr[right]);
        let breadth = right - left;
        let area = length * breadth;

        maxArea = Math.max(maxArea, area);

        if(arr[left] < arr[right]) left++;
        else right--;
    }
    return maxArea;
};