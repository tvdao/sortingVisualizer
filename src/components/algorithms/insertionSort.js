import {
    SWAP,
} from "../helper/constants"
import {swap} from "../helper/arrayOperations"

const insertionSort = async(list) => {
    let moves = []
    for (let i = 0; i < list.length-1; ++i) {
        let j = i
        while (j >= 0 && list[j].height > list[j+1].height) {
            await swap(list, j, j+1)
            moves.push([j, j+1, SWAP])
            --j
        }
    }
    return moves
}

export {insertionSort}