/**
 * https://codeforces.com/problemset/problem/96/A
 */
var players = readline();
print(/([01])\1{6}/.test(players) ? "YES" : "NO");