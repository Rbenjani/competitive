/**
 * https://codeforces.com/contest/996/problem/A
 */
var dollars = readline();
var dollarBills = [100, 20, 10, 5, 1];
var dollarCheck = 0;
var numBills = 0;

while(dollars > 0) {
    if(dollars - dollarBills[dollarCheck] >= 0) {
        dollars -= dollarBills[dollarCheck];
        numBills++;
    } else {
        dollarCheck++;
    }
}

print(numBills);