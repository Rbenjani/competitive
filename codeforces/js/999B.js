/**
 * https://codeforces.com/problemset/problem/999/B
 * Reversing Encryption
 */
var n = +readline();
var t = readline().split('');

// Get all divisors from n
var divisors = [];
for(var i = 2; i <= n / 2; i++) {
    if(n % i === 0) {
        divisors.push(i);
    }
}

function reverseString(st, div) {
    if(div.length === 0) {
        return st.reverse().join('');
    } else {
        var divisor = div.shift();
        var aux = st.slice(divisor); 
        st = st.slice(0, divisor).reverse();
        return reverseString(st.concat(aux), div);
    }
}

s = reverseString(t, divisors);

print(s);