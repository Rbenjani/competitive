/**
 * 860. Lemonade Change
 * https://leetcode.com/problems/lemonade-change/description/
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var five = 0;
    var ten = 0;
    for(var i of bills) {
        if(i === 5) {
            five++;
        } else if(i === 10) {
            five--;
            ten++;
        } else if(ten > 0) {
            ten--;
            five--;
        } else {
            five -= 3;
        }

        if(five < 0) {
            return false;
        }
    }
    return true;
};

console.log(lemonadeChange([5,5,10]));