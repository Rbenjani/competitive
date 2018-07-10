/**
 * Delete from the Left
 * https://codeforces.com/problemset/problem/1005/B
 */
var s = readline();
var t = readline();

var slength = s.length;
var tlength = t.length;

var minLength = Math.min(slength, tlength);
var equal = 0;
for(var i = 0; i < minLength; i++) {
    if(s[s.length - 1 - i] === t[t.length - 1 - i]) {
        equal++;
    } else {
        break;
    }
}
print(s.length + t.length - 2 * equal);