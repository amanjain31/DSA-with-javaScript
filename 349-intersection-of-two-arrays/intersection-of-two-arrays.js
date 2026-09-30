/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(arr1, arr2) {
    let set1 = new Set();

    for(let i = 0; i < arr1.length; i++){
        set1.add(arr1[i])
    }


    let answer = new Set();

    for(let i = 0; i < arr2.length; i++){
        if(set1.has(arr2[i])){
            answer.add(arr2[i]);
        }
    }

    let result = [...answer]
    return result;
};