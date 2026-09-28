/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    isValid(arr, mid, k) {
        let sum = 0;
        let count = 1;

        for (let i = 0; i < arr.length; i++) {
            if (sum + arr[i] > mid) {
                count++;
                sum = arr[i];

                if (count > k) {
                    return false;
                }
            } else {
                sum += arr[i];
            }
        }

        return true;
    }
    findPages(arr, k) {
        // code here
        
        if(k > arr.length){
            return -1
        }
        let first = -Infinity;
        let last = 0;
        let ans = -1;
        
        for(let i = 0; i < arr.length; i++){
            first = Math.max(arr[i], first);
            last += arr[i]; 
        }
        
        while(first <= last){
            let mid = Math.floor((first + last) / 2);
            
            if(this.isValid(arr, mid, k)){
                ans = mid;
                last = mid - 1
            }else{
                first = mid + 1
            }
        }
        
        return ans;
    }
}