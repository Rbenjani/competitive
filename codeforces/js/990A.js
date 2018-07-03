/**
 * Commentary Boxes
 * https://codeforces.com/problemset/problem/990/A
 */
// n = rl[0] => umber of the commentary boxes
// m = rl[1] => number of delegations
// a = rl[2] => fee to build a box 
// b = rl[3] => fee to demolish a box
var rl = readline().split(' ').map(Number);
var totalCreate;
var totalDestroy;

if(rl[0] % rl[1] === 0) {
    print(0);
} else if(rl[0] > rl[1]) {
    rl[0] %= rl[1];
    totalCreate = (rl[1] - rl[0]) * rl[2];
    totalDestroy = rl[0] * rl[3]; 
    print(Math.min(totalCreate, totalDestroy));
} else {
    totalCreate = (rl[1] - rl[0]) * rl[2];
    totalDestroy = rl[0] * rl[3];
    print(Math.min(totalCreate, totalDestroy));
}