/**
 * @param number a
 * @param number b
 * @returns number
 */

class Solution {
    gcd(a, b) {
        // code here
        
        while(b > 0){
            let rem = a % b;
            a = b
            b = rem;
        }
        
        return a;
    }
}