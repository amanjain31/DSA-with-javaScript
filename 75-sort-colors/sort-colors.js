/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
    //3rd and optimized approch
    let low = 0 
    let mid = 0;
    let heigh = arr.length - 1;


    while(mid <= heigh){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }else if(arr[mid] === 1){
            mid++
        }else{
            [arr[mid], arr[heigh]] = [arr[heigh], arr[mid]];
            heigh--;
        }
    }

    return arr;
};