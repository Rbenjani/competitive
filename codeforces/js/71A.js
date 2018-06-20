/**
 * https://codeforces.com/problemset/problem/71/A
 */
var wordsNumber = readline();
var word;
for (var i = 0; i < wordsNumber; i++) {
    word = readline();
    if (word.length > 10) {
        print(word[0] + (word.length - 2) + word.slice(-1));
    } else {
        print(word);
    }
}
