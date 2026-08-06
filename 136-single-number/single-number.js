/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
    let map = new Map();

    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], (map.get(arr[i])) + 1);
        }else{
            map.set(arr[i], 1)
        }
    }

    let ans = 0;
    for(let [key, value] of map){
        if(value === 1){
            ans = key;
        }
    }

    return ans;
};