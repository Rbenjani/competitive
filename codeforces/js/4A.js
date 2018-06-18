/**
 * Input
 * The first (and the only) input line contains intger number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.
 *
 * Output
 * Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.
 */
function main() {
    var w = +readline();
    print(w > 2 && w % 2 === 0? 'YES' : 'NO');
}

main();