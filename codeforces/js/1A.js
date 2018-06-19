/**
 * https://codeforces.com/problemset/problem/1/A
 */
function main() {    
    var inputs = readline().split(" ").map(Number);
    var x = inputs[0];
    var y = inputs[1];
    var a = inputs[2];

    answer = Math.ceil(x / a) * Math.ceil(y / a);
    print(answer);
}

main();