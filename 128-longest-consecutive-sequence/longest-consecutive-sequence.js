/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(arr) {
    const set = new Set();

    for(const num of arr){
        set.add(num);
    }

    let max = 0;

    for(let nums of set){
        let val = nums;
        let count = 1;
        
        if(set.has(val - 1)){
            continue;
        }
        
        while(set.has(++val)){
            count++;
        }
        
        max = Math.max(max, count);
    }

    return max;
};