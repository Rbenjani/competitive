/**
 * Codehorses T-shirts
 * https://codeforces.com/problemset/problem/1000/A
 */
var n = +readline();
var ai = {};
var bi = {};
var same = 0;
var size;

for(var i = 0; i < n; i++) {
    size = readline();
    ai[size] = ai[size] + 1 || 1;
}

for(i = 0; i < n; i++) {
    size = readline();
    bi[size] = bi[size] + 1 || 1;
}

for(var prop in ai) {
    same += Math.min(ai[prop] || 0 , bi[prop] || 0);
}

print(n - same);
