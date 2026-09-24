/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var isValid = function(piles, speed, h){
    let totelHour = 0;

    for(let i = 0; i < piles.length; i++){
        if(piles[i] % speed === 0){
            totelHour += piles[i]/speed;
        }else{
            totelHour += Math.ceil(piles[i]/speed);
        }


        if(totelHour > h) return false;
    }
    return true;    

} 
var minEatingSpeed = function(piles, h) {
    let first = 1;
    let last = 0;
    let ans = -1;

    for(let i = 0; i < piles.length; i++){
        last = Math.max(piles[i], last);
    }  // O(n)

    while(first <= last){
        let mid = Math.floor((first + last) / 2);
        if(isValid(piles, mid, h)){
            ans = mid;
            last = mid - 1;
        }else{
            first = mid + 1;
        }
    }
    return ans;
};