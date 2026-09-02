/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sWorld = s.split(" ");
    if(sWorld.length !== pattern.length) return false;
    let map0 = new Map(), map1 = new Map();

    for(let i in pattern){
        if(map0.get(pattern[i]) !== map1.get(sWorld[i])) return false;

        map0.set(pattern[i], i);
        map1.set(sWorld[i], i);
    } 
    return true;
};