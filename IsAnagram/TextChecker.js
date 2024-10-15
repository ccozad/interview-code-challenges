exports.isAnagram = function(s1, s2) {
    if(s1.length !== s2.length) {
        return false;
    }
    
    let s1Map = {};
    let s2Map = {};
    
    // Count the occurances of each character in string 1 and 2
    for(let i = 0; i < s1.length; i++) {
        if(s1Map.hasOwnProperty(s1[i])) {
            s1Map[s1[i]]++;
        } else {
            s1Map[s1[i]] = 1;
        }
        
        if(s2Map.hasOwnProperty([s2[i]])) {
            s2Map[s2[i]]++;
        } else {
            s2Map[s2[i]] = 1;
        }
    }
    
    // Compare character counts in each string
    for(let key in s1Map) {
        if(s1Map[key] !== s2Map[key]) {
            return false;
        }
    }
    
    return true;
};