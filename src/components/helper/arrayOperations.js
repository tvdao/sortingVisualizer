import {NORMAL} from "./constants.js"

const generateArray = (size) => {
    const unique = new Set();
    const list = []
    while (list.length < size) {
        let num = Math.floor(Math.random() * size) + 1
        if (!unique.has(num)) {
            unique.add(num)
            list.push({
                height: num,
                stateType: NORMAL,
            })
        }
    }
    return list
}

const swap = (list, i, j) => {
    let tmp = list[i]
    list[i] = list[j]
    list[j] = tmp
}

export {generateArray, swap}