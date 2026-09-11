/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    productExceptSelf(arr) {
        // code here
        let ans = [];
        
        let prefix = 1;
        for(let i = 0; i < arr.length; i++){
            ans.push(prefix);
            prefix *= arr[i]
        }
        
        let suffix = 1
        for(let i = arr.length - 1; i >= 0; i--){
            ans[i] *= suffix;
            suffix *= arr[i]
        }
        
        return ans;
    }
}