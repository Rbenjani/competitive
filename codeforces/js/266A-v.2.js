/**
 * https://codeforces.com/problemset/problem/266/A
 * Version 2 with positive lookahead
 */
var aux = readline();
var stones = readline();
var stonesToTake = stones.match(/([RGB])(?=\1)/g);
print(stonesToTake ? stonesToTake.length : 0);