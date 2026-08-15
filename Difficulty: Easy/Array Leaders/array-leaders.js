/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    leaders(arr) {
        // code here
        let ans = [];
        let maxi = arr[arr.length - 1];
        ans.push(maxi);
        
        
        for(let i = arr.length - 2; i >= 0; i--){
            if(arr[i] >= maxi){
                ans.push(arr[i]);
                maxi = arr[i]
            }
        }
        
        ans.reverse();
        return ans;
    }
}