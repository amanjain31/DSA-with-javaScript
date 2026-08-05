/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
// class Solution {
//     findUnion(arr1, arr2) {
//         // code here
//         let set = new Set();
    
//         for(let i = 0; i < arr1.length; i++){
//             set.add(arr1[i])
//         }
        
//         for(let j = 0; j < arr2.length; j++){
//             set.add(arr2[j])
//         }
        
//         let index= 0;
//         let newarr = new Array(set.size);
        
//         for(let value of set){
//             newarr[index] = value;
//             index++;
//         }
//         newarr.sort((a, b) => a - b);
        
//         return newarr;
//     }
// }


class Solution {
    findUnion(arr1, arr2) {
        let i = 0;
        let j = 0;
        let unionArr = [];

        while (i < arr1.length && j < arr2.length) {

            if (arr1[i] < arr2[j]) {

                if (
                    unionArr.length === 0 ||
                    unionArr[unionArr.length - 1] !== arr1[i]
                ) {
                    unionArr.push(arr1[i]);
                }
                i++;

            } else if (arr1[i] > arr2[j]) {

                if (
                    unionArr.length === 0 ||
                    unionArr[unionArr.length - 1] !== arr2[j]
                ) {
                    unionArr.push(arr2[j]);
                }
                j++;

            } else {

                if (
                    unionArr.length === 0 ||
                    unionArr[unionArr.length - 1] !== arr1[i]
                ) {
                    unionArr.push(arr1[i]);
                }
                i++;
                j++;
            }
        }

        while (i < arr1.length) {
            if (
                unionArr.length === 0 ||
                unionArr[unionArr.length - 1] !== arr1[i]
            ) {
                unionArr.push(arr1[i]);
            }
            i++;
        }

        while (j < arr2.length) {
            if (
                unionArr.length === 0 ||
                unionArr[unionArr.length - 1] !== arr2[j]
            ) {
                unionArr.push(arr2[j]);
            }
            j++;
        }

        return unionArr;
    }
}