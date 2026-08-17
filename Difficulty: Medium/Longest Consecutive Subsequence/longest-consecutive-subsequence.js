/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    longestConsecutive(arr) {
        // code here
        let set = new Set();
        
        for(let num of arr){
            set.add(num)
        }
        
        let max = 0;
        
        for(let item of set){
            let val = item;
            let count = 1;
            
            if(set.has(val - 1)){
                continue;
            }
            
            while(set.has(++val)){
                count++;
            }
            
            max = Math.max(count, max);
        }
        
        return max;
    }
}