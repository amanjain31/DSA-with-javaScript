/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let arr = [];

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }

    }

    if(k <= arr.length){
        return arr[k - 1];
    }else{
        return -1;
    }
};