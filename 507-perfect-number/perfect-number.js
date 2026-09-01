/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(n) {
    let sum = 0;
    for(let i = 1; i <= n - 1; i++){
        if(n % i === 0){
            sum += i;
        }
    }

    return sum === n;
};