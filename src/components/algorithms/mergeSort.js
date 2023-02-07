import { 
    SWAP
} from '../helper/constants'

const mergeSort = async(list) => {
    let moves = []
    await divide(list, moves, 0, list.length-1);
    return moves;
};

const divide = async(list, moves, start, end) => {
    if(start < end) {
        let mid = start + Math.floor((end - start)/2);
        await divide(list, moves, start, mid);
        await divide(list, moves, mid+1, end);
        await merge(list, moves, start, mid, end);
    }
};

const merge = async(list, moves, start, mid, end) => {
    // moves will be in format, [start, end, swap or not, [indexes]]
    let i, j, k
    let indexes = []
    for (i = start; i <= end; i++) {
        indexes.push(i)
    }
    let leftSize, rightSize
    leftSize = mid - start + 1
    rightSize = end - mid

    let leftList, rightList
    leftList = new Array(leftSize)
    rightList = new Array(rightSize)
    let leftSide = []
    let rightSide = []
    for (i = 0; i < leftSize; i++) {
        leftList[i] = list[start+i];
        leftSide.push(i+start)
    }
    for (j = 0; j < rightSize; j++) {
        rightList[j] = list[mid+1+j]
        rightSide.push(j+mid+1)
    }

    i = j = 0
    k = start
    while (i < leftSize && j < rightSize) {
        if (leftList[i].height <= rightList[j].height) {
            list[k] = leftList[i]
            i++
        } else {
            list[k] = rightList[j]
            j++
        }
        k++
    }

    while (i < leftSize) {
        list[k] = leftList[i]
        i++
        k++
    }

    while (j < rightSize) {
        list[k] = rightList[j]
        j++
        k++
    }
    for (i = start; i <= end; i++) {
        moves.push([i, list[i], SWAP, indexes])
    }
};

export {mergeSort}