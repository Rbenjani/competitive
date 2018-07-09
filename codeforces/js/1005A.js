/**
 * Tanya and Stairways
 * http://codeforces.com/problemset/problem/1005/A
 */
var numbers = +readline();
var steps = readline().split(' ').map(Number);

if (numbers === 1) {
    print(1);
    print(1);
} else {
    var stepsStairway = [];
    for (var i = 1; i < numbers; i++) {
        if (steps[i] === 1) {
            stepsStairway.push(steps[i - 1]);
        }
    }

    stepsStairway.push(steps.pop());
    print(stepsStairway.length);
    print(stepsStairway.join(' '));
}