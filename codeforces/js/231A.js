/**
 * https://codeforces.com/problemset/problem/231/A
 */
var problems = +readline();
var implementProblems = 0;
for(var i = 0; i < problems; i++){
    if(readline().split(' ').filter(e => e === '1').length >= 2)
        implementProblems++;
}
print(implementProblems);