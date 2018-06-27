/**
 * https://codeforces.com/contest/996/problem/B
 */
var n = readline(); // Number of queues
var ak = readline()
    .split(' ')
    .map(Number); // People in each queue

var bk = ak.map((ai, i) => {
    return i + Math.ceil((ai - i) / n) * n;
});

var minBk = bk[0];
var posAllen = 1;
for(var i = 1; i < n; i++) {
    if(bk[i] < minBk) {
        minBk = bk[i];
        posAllen = (i+1);
    }
}

print(posAllen);
