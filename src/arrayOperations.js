/**
 * Generate a random array of given length, and max number
 * is maxNum
 * 
 * @param length - the length of the array
 * @param maxNum - the maximum number in the array
 * 
 * @returns An array with random integers
 */
const arrayOperations = (length, maxNum) => {
    const array = [];
    while (array.length < length) {
        let currNumber = Math.floor(Math.random() * maxNum) + 1;
        if (array.indexOf(currNumber) === -1) {
            array.push(currNumber);
        }
    }
    return array;
}

export {arrayOperations};