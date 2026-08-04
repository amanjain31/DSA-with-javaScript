/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(arr1, arr2) {
        // code here
        let set = new Set();
    
        for(let i = 0; i < arr1.length; i++){
            set.add(arr1[i])
        }
        
        for(let j = 0; j < arr2.length; j++){
            set.add(arr2[j])
        }
        
        let index= 0;
        let newarr = new Array(set.size);
        
        for(let value of set){
            newarr[index] = value;
            index++;
        }
        newarr.sort((a, b) => a - b);
        
        return newarr;
    }
}