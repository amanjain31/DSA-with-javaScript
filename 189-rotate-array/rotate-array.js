/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(arr, k) {
    let newK = k % arr.length;

    let i = 0;
    let j = arr.length - 1;

    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--;
    }

    left = 0;
    right = newK - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    let l = newK;
    let r = arr.length - 1;

    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }

    return arr;
};