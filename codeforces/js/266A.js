/**
 * https://codeforces.com/problemset/problem/266/A
 */
var aux = readline();
var stones = readline();
var stonesToTake = 0;
for(var i = 0; i < stones.length - 1; i++) {
    if(stones[i] === stones[i+1]) {
        stonesToTake++;
    }
}
print(stonesToTake);