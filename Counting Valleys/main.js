'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let step, currAltitude = 0,
        prevAltitude = 0,
        numOfValleys = 0;

    // Check first step.
    step = s[0];
    if (step === 'U') {
        prevAltitude++;
        currAltitude++;
    } else {
        prevAltitude--;
        currAltitude--;
    }

    for (let currStep = 1; currStep < n; currStep++) {
        step = s[currStep];

        (step === 'U') ? currAltitude++ : currAltitude--;

        // If altitude is going from down to up (completing valley).
        if (currAltitude === 0 && prevAltitude < 0) {
            numOfValleys++;
        }
        // If altitude is going from up to down (completeing hill).
        else if (currAltitude === 0 && prevAltitude > 0) {
            // Do nothing (should count hills tho).
        }

        // Change prevAltitude to currAltitude.
        prevAltitude = currAltitude;
    }

    return numOfValleys;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine(), 10);

    // const s = readLine();
    let n = 12,
        s = 'DDUUDDUDUUUD';
    let result = countingValleys(n, s);
    console.log(result);

    // ws.write(result + "\n");

    // ws.end();
}

// Start of the program.
main();