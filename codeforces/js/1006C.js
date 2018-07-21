/**
 * Three Parts of the Array
 * https://codeforces.com/problemset/problem/1006/C
 */
var nElements = +readline();
var elements = readline().split(' ').map(Number);

var index1 = 0;
var index2 = nElements - 1;
var maxSum = 0;
var maxIndex1 = 0;
var maxIndex2 = 0;
var sum1 = elements[0];
var sum2 = elements[index2];

while (index1 < index2) {
    if(sum1 < sum2) {
        index1++;
        sum1 += elements[index1];
    } else if(sum1 === sum2) {
        // Save this case
        maxSum = sum1;
        maxIndex1 = index1;
        maxIndex2 = index2;

        // Search for best case
        index1++;
        index2--;
        sum1 += elements[index1];
        sum2 += elements[index2];
    } else {
        index2--;
        sum2 += elements[index2];
    }
}

print(maxSum);
