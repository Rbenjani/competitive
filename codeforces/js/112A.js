/**
 * https://codeforces.com/problemset/problem/112/A
 */
// Read the two strings
var strings = [readline().toLowerCase(), readline().toLowerCase()];
var lexValue = 0;
if (strings[0] < strings[1]) {
    lexValue++;
} else if (strings[0] > strings[1]) {
    lexValue--;
}
print(lexValue);
