/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let total = 0;
    let d = 1;
    while (Math.pow(10, d - 1) <= n) {
        const lower = Math.pow(10, d - 1);
        const upper = Math.min(n, Math.pow(10, d) - 1);
        const count = upper - lower + 1;
        const commasPerNumber = Math.floor((d - 1) / 3);
        total += count * commasPerNumber;
        d += 1;
    }
    return total;
};