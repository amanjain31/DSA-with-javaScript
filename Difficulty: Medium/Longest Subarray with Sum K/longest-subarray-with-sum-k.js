/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        // code here
        let map = new Map();
        let sum = 0;
        let maxLength = 0;
        
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        
            // Case 1: Subarray starts from index 0
            if (sum === k) {
                maxLength = i + 1;
            }
        
            // Case 2: Check if (sum - k) exists
            if (map.has(sum - k)) {
                maxLength = Math.max(maxLength, i - map.get(sum - k));
            }
        
            // Store only the first occurrence of a prefix sum
            if (!map.has(sum)) {
                map.set(sum, i);
            }
        }
        
        return maxLength;
    }
}
