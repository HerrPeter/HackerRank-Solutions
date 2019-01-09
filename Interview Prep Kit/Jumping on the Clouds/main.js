'use strict';

/**
 * Complete the jumpingOnClouds function below.
 * @param {array} c - The array of binary integers representing good and bad clouds.
 */
function jumpingOnClouds(c) {
    let currIndex = 0,
        jumps = 0;
    while (currIndex < c.length - 1) {
        if (c[currIndex + 2] == 0) {
            currIndex += 2;
        } else if (c[currIndex + 1] == 0) {
            currIndex += 1;
        } else {
            // May need to search through rest of binary-integers for a 0.
            currIndex += 1;
        }

        jumps++;
    }

    return jumps;
}

// The entry point of the program.
function main() {
    let clouds = [0, 0, 1, 0, 0, 1, 0];
    console.log(jumpingOnClouds(clouds));
}

// Start of the program.
main();