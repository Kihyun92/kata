// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    const arrLength = arr.length;
    if (arrLength === 3) {
        if (arr[0] === arr[1]) {
            return arr[2];
        } else {
            return arr[0] === arr[2] ? arr[1] : arr[0]; 
        }
    }

    let cnt = 0;
    for (let i = 1; i< arrLength; i++) {
        if (cnt > 1) {
            return arr.find(num => num !== arr[i-1]);
        }
        if (arr[0] === arr[i]) {
            cnt += 1;
        }
    }
    if (cnt === 0) {
        return arr[0];
    }
}

  
console.log(findUniq([0, 1, 0 ]));

// best > sorting하면 ...