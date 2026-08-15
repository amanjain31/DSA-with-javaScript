/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    let ans = [];
    let s;


    for(let i = 0; i < arr.length; i++){
        s = arr[i] * arr[i];
        ans.push(s);
    }

    ans.sort((a, b) => a - b);
    return ans;
};