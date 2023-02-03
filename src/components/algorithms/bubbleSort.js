import {
    SWAP,
    NO_SWAP
} from "../helper/constants"
import {swap} from "../helper/arrayOperations"

const bubbleSort = async(list) => {
    let moves = []
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < (list.length - i - 1); j++) {
            if (list[j].height > list[j+1].height) {
                swap(list, j, j+1);
                moves.push([j, j+1, SWAP])
            } else {
                moves.push([j, j+1, NO_SWAP])
            }
        }
    }
    return moves
}

export {bubbleSort}