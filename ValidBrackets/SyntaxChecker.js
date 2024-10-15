exports.isBalancedBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        if (map.hasOwnProperty(str[i])) {
            stack.push(str[i]);
        } else {
            let last = stack.pop();
            if (str[i] !== map[last]) {
                return false
            }
        }
    }

    if (stack.length !== 0) {
        return false
    } else {
        return true;
    }
};