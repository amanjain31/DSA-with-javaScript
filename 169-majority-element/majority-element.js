/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(arr) {
    // 2nd and optimized approch 
    let candidate = arr[0];
    let count = 1;

    for(let i = 1; i < arr.length; i++){
        if(count === 0){
            candidate = arr[i];
            count = 1;
        }else if(arr[i] === candidate){
            count++;
        }else{
            count--;
        }
    }
    return candidate;
};