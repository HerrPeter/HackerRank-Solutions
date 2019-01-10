'use strict';

/**
 * Return the number of pairs of socks (unique pairs in the array).
 * @param {number} sockCount - Number of socks in the sockArr.
 * @param {Array} sockArr - Array of socks (unsorted) represented as integers.
 */
function sockMerchant(sockCount, sockArr) {
    let tempArr = sockArr,
        numOfPairs = 0;

    // Sort array.
    tempArr.sort();

    // Search array.
    // If first two items are the same -> remove them and add one to number of pairs
    // Else Remove first item and compare next two (prev condition)
    while (tempArr.length > 1) {
        if (tempArr[0] === tempArr[1]) {
            // Pair of socks found
            tempArr.shift();
            tempArr.shift();
            numOfPairs++;
        } else {
            tempArr.shift();
        }
    }

    return numOfPairs;
}

// The entry point of the program.
function main() {
    let arr = [22, 10, 2, 22, 2, 13, 13, 10, 2];
    let num = 7;
    console.log(sockMerchant(num, arr));
}

// The start of the program.
main();