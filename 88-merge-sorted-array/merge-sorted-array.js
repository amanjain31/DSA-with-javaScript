/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(arr1, m, arr2, n) {
    let newArray = new Array(m + n);
    let left = 0;
    let right = 0;
    let newArrayIndex = 0;

    while(left < m && right < n){
        if(arr1[left] < arr2[right]){
            newArray[newArrayIndex] = arr1[left];
            newArrayIndex++;
            left++;
        }else{
            newArray[newArrayIndex] = arr2[right];
            newArrayIndex++;
            right++;
        }
    }

    while(left < m){
        newArray[newArrayIndex] = arr1[left];
        newArrayIndex++;
        left++;
    }

    while(right < n){
        newArray[newArrayIndex] = arr2[right];
        newArrayIndex++;
        right++;
    }

    for(let i = 0; i < m + n; i++){
        arr1[i] = newArray[i]; 
    }

};