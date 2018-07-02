/**
 * If at first you don't succeed...
 * https://codeforces.com/problemset/problem/991/A
 */
var distribution = readline().split(' ').map(Number);
var bdStudents = distribution[0];
var bkStudents = distribution[1];
var both = distribution[2];

var result = distribution[3] - bdStudents - bkStudents + both;
if(both > bdStudents || both > bkStudents || result <= 0) {
    print(-1);
} else {
    print(result);
}