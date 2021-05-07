const bubbleSort = (array) => {
    const arrLength = array.length;
    for (let i = 0; i < arrLength-1; i++) {
        for (let j = 0; j < arrLength - i - 1; j++) {
            if (array[j].height > array[j+1].height) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

export {bubbleSort};