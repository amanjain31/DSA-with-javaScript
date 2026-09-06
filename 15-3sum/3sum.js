/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {

    let ans = [];

    arr.sort((a,b) => a - b);

    for(let i = 0; i < arr.length - 2; i++){
        if(i !== 0 && arr[i - 1] === arr[i]) continue;

        let j = i + 1;
        let k = arr.length - 1;

        while(j < k){
            let sum = arr[i] + arr[j] + arr[k];

            if(sum === 0){
                let temp = [arr[i], arr[j++], arr[k--]];
                ans.push(temp);

                while(j < k && arr[j - 1] === arr[j]) j++;
                while(j < k && arr[k + 1] === arr[k]) k--;
            }else if(sum < 0){
                j++;
            }else{
                k--;
            }
        }
    }

    return ans;
};