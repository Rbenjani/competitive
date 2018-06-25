/**
 * https://codeforces.com/problemset/problem/282/A
 */
var operations = readline();
var value = 0;
for(var i = 0; i < operations; i++) {
    if(readline().indexOf('+') !== -1) {
        value++;
    } else {
        value--;
    }
}
print(value);