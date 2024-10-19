exports.intersection = function(array1, array2) {
    var lookup = {};
    for(var i = 0; i < array1.length; i++) {
        lookup[array1[i]] = true;
    }

    var intersection = [];
    for(var i = 0; i < array2.length; i++) {
        if(lookup.hasOwnProperty(array2[i])) {
            delete lookup[array2[i]];
            intersection.push(array2[i]);
        }
    }

    return intersection;
}