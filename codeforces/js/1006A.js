/**
 * Adjacent Replacements
 * https://codeforces.com/problemset/problem/1006/A
 */
var elements = readline();
elements = readline().split(' ').map(e => e % 2 === 0 ? e - 1 : e).join(' ');
print(elements);
