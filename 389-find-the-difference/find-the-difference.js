/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    let difference = -1;

    for(let [key, value] of map){
        if(value === -1){
            difference = key;
        }
    }

    return difference;
};