/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();

    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], (map.get(arr[i])) + 1)
        }else{
            map.set(arr[i], 1)
        }
    }

    let ans = -1;

    for(let [key, value] of map){
        if(key == value){
            ans = Math.max(ans, key)
        }
    }

    return ans;
};