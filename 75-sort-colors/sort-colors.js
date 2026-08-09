/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
    // Second approch
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            count1++;
        }else if(arr[i] === 1){
            count2++;
        }else{
            count3++;
        }
    }

    for(let j = 0; j < count1; j++){
        arr[j] = 0
    }

    for(let k = count1; k < count1 + count2; k++){
        arr[k] = 1
    }

    for(let l = count1 + count2; l < arr.length; l++){
        arr[l] = 2
    }


    return arr;
};