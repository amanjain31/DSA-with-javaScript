/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(arr) {
    let positive = [];
    let negative = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            positive.push(arr[i]);
        }else{
            negative.push(arr[i]);
        }
    }

    let i = 0;
    let j = 0;
    let Index = 0

    for(let Index = 0; Index < arr.length; Index++){
        if(Index % 2 === 0){
            arr[Index] = positive[i];
            i++;
        }else{
            arr[Index] = negative[j];
            j++;
        }
        
    }

    return arr;
};