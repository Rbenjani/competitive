/**
 * Polycarp's Practice
 * https://codeforces.com/problemset/problem/1006/B
 */
var line = readline().split(' ').map(Number);
var n = line[0]; // Number of problems
var k = line[1]; // Number of days
var difProblems = readline().split(' ').map(Number);

var maxInd = [];
var ans = 0;

for (var i = 0; i < k; i++) {
    var max = difProblems[0];
    var index = 0;
    for (var j = 0; j < n; j++) {
        if (max < difProblems[j]) {
            max = difProblems[j];
            index = j;
        }
    }
    ans += max;
    difProblems[index] = 0;
    maxInd[i] = index;
}

maxInd.sort((a, b) => a < b ? -1 : 1);

print(ans);
if (maxInd.length === 1) {
    print(n);
} else {
    var problemsDay = [maxInd[0] + 1];
    for (var i = 1; i < maxInd.length - 1; i++) {
        problemsDay.push(maxInd[i] - maxInd[i - 1]);
    }

    problemsDay.push(n - maxInd[k - 2] - 1);
    print(problemsDay.join(' '));
}