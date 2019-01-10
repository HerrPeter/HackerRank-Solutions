'use strict';

/**
 * Rotate the array left a number of times passed as an argument.
 * @param {Array} arr - The array to rotate.
 * @param {*} numOfRot - The number of rotations to do.
 */
function rotLeft(arr, numOfRot) {
    let temp;
    for (let currRot = 1; currRot <= numOfRot; currRot++) {
        temp = arr[0];
        arr.shift();
        arr.push(temp);
    }

    return arr;
}

// Entry point of the program.
function main() {
    let arr = [1, 2, 3, 4, 5];
    let numOfRot = 2;
    console.log(rotLeft(arr, numOfRot));
}

// Start of the program.
main();