/**
 * https://codeforces.com/problemset/problem/999/A
 * Mishka and Contest
 */
var rl = readline().split(' ').map(Number);
var n = rl[0];
var k = rl[1];
var ai = readline().split(' ').map(Number);

var i = 0;
while(ai[i] <= k){
    i++;
}

if(i === n) {
    print(n);
} else {
    while(ai[--n] <= k) {
        i++;
    }

    print(i);
}