import {
    SWAP,
} from "../helper/constants"
import {swap} from "../helper/arrayOperations"

const selectionSort = async(list) => {
    let moves = []
    let minIdx
    for (let i = 0; i < list.length-1; i++) {
        minIdx = i
        for (let j = i + 1; j < list.length; j++) {
            moves.push([i, j, !SWAP])
            if (list[j].height < list[minIdx].height) {
                minIdx = j
            }
        }
        moves.push([i, minIdx, SWAP])
        swap(list, minIdx, i)
    }
    return moves
}

export {selectionSort}