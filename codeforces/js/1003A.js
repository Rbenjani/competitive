/**
 * Polycarp's Pockets
 * http://codeforces.com/problemset/problem/1003/A
 */
var coinsNumber = +readline();
var coinsValues = readline().split(' ').map(Number);

if (coinsNumber === 1) {
    print(1);
} else {
    var valuesAmount = new Array(100).fill(0);
    for (var i = 0; i < coinsNumber; i++) {
        valuesAmount[coinsValues[i]-1]++;
    }
    print(valuesAmount.reduce((a, b) => a > b ? a : b));
}
