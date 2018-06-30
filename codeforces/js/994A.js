/**
 * Fingerprints
 * https://codeforces.com/problemset/problem/994/A
 */
var numbers = readline().split(' ').map(Number);
var sequence = readline().split(' ').map(Number);
var fingerprints = readline().split(' ').map(Number);

var code = [];
for(var i = 0; i < numbers[0]; i++) {
    for(var j = 0; j < numbers[1]; j++) {
        if(sequence[i] === fingerprints[j]) {
            code.push(sequence[i]);
            break;
        }
    }
}

print(code.join(' '));