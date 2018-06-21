/**
 * https://codeforces.com/problemset/problem/158/A
 */
var nums = readline()
    .split(' ')
    .map(Number);
var scores = readline()
    .split(' ')
    .map(Number);

if (!scores[0]) {
    print(0);
} else {
    var score_k = scores[nums[1] - 1];
    var k = 0;
    while (k < nums[0] && scores[k] !== 0 && scores[k] >= score_k) {
        k++;
    }
    print(k);
}
