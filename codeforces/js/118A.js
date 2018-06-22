/**
 * https://codeforces.com/problemset/problem/118/A
 */
var givenString = readline();
print(givenString.toLowerCase().replace(/[aeiyou]/g, '').replace(/(.)/g, '.$1'));