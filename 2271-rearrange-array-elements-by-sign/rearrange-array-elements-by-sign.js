/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(arr) {
    // 2nd thaught and optimized one
    let answer = new Array(arr.length);

    let positiveIndex = 0;
    let negativeIndex = 1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            answer[positiveIndex] = arr[i];
            positiveIndex += 2;
        } else {
            answer[negativeIndex] = arr[i];
            negativeIndex += 2;
        }
    }
    return answer;
};