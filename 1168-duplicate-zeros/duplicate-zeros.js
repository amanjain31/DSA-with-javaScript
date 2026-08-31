/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let countZero = 0;

    for(c = 0; c < arr.length; c++){
        if(arr[c] === 0){
            countZero++;
        }
    }

    let i = arr.length - 1;
    let j = arr.length - 1 + countZero;

    while (i >= 0) {

    if (j < arr.length) {
        arr[j] = arr[i];
    }

    j--;

    if (arr[i] === 0) {
        if (j < arr.length) {
            arr[j] = 0;
        }

        j--;
    }

    i--;
}
};