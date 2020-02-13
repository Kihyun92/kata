// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    const newStr1 = strToSortedArray(str1);
    const newStr2 = strToSortedArray(str2);
    const { length } = newStr2;

    for (let i = 0; i < length; i++) {
        const result = newStr1.indexOf(newStr2[i]);

        if (result === -1) {
            return false;
        }
        newStr1.splice(result, 1);
    }
    return true;
}

const strToSortedArray = str => {
    const arr = str.split('');
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

// scramble('rkqodrlw', 'wowrwlwdjjpt');
// scramble('rkqodlw', 'world');
// scramble('cedewaraaossoqqyt', 'codewars');
// scramble('katas', 'steak');

scramble('rkqodlw', 'world');
scramble('cedewaraaossoqqyt', 'codewars');
scramble('katas', 'steak');
scramble('scriptjava', 'javascript');
scramble('scriptingjava', 'javascript');
scramble('scriptsjava', 'javascripts');
scramble('jscripts', 'javascript');
scramble('aabbcamaomsccdd', 'commas');
