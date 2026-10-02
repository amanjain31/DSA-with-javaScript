class Solution {
    cntSubarrays(arr, k) {
        // code here
        let sum = 0;
        let count = 0;
        
        let map = new Map();
        
        map.set(0, 1);
        
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
            
            if(map.has(sum - k)){
                count += map.get(sum - k);
            }
            
            if(map.has(sum)){
                map.set(sum, map.get(sum) + 1)
            }else{
                map.set(sum, 1)
            }
        }
        
        return count;
    }
}