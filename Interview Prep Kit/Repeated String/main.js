'use strict';

/**
 * Complete the repeatedString function below.
 * @param {string} string - The string to repeat until the number is reached.
 * @param {number} number - The desired number of characters check.
 */
function repeatedString(string, number) {
    let factor = (number / string.length);
    let subOccurences = string.split('a').length - 1;
    let count = 0;

    // Check if decimal/has remainder.
    if ((factor % 1) > 0) {
        // The number of characters to reach.
        factor = Math.floor(factor);
        count = factor * subOccurences;

        // The remaining number of characters.
        let remain = string.length * factor;
        remain = number - remain;

        // Count the number of 'a' chars in the remaining number of characters.
        string = string.substr(0, remain);
        return (string.split('a').length - 1) + count;
    }

    // For whole number parameters.
    count = subOccurences * factor;

    return count;
}

// The entry point of the program.
function main() {
    let inStr = 'aba';
    let inNum = 11;
    let count = repeatedString(inStr, inNum)
    console.log(count);
}

// The start of the program.
main();