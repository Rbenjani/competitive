/**
 * https://codeforces.com/problemset/problem/339/A
 */
print(readline().split('+').sort( (a,b) => a < b ? -1 : 1).join('+'));
