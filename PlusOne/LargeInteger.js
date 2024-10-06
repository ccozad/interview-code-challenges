exports.plusOne = function(digits) {
    let carry = 0;
    let sum = 0
    let answer = [];
    for(let i = digits.length - 1; i >= 0; i--) {
        if(i == digits.length - 1) {
            sum = digits[i] + 1 + carry;
        } else {
            sum = digits[i] + carry;
        }
       
        if(sum > 9) {
            carry = sum - 9;
            sum = 0;
        } else {
            carry = 0;
        }
        
        answer.unshift(sum);
    }
    
    if(carry > 0) {
        answer.unshift(carry);
    }
    
    return answer;
};