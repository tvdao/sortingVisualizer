import React, {useState, useEffect, useRef } from "react";

// algorithms
import {bubbleSort} from "./algorithms/bubbleSort";
import {insertionSort} from "./algorithms/insertionSort";
import {selectionSort} from "./algorithms/selectionSort";
import {mergeSort} from "./algorithms/mergeSort"

// components
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

// helpers
import {generateArray, swap} from "./helper/arrayOperations";
import {pause} from "./helper/pause";
import "./SortingVisualizer.css";

// constants
import {
    ALGORITHMS,
    BUBBLE_SORT,
    CURRENT,
    DEFAULT_LIST_SIZE,
    DEFAULT_SPEED,
    DONE,
    INSERTION_SORT,
    MERGE_SORT,
    NONE,
    NORMAL,
    NOT_RUNNING,
    RUNNING,
    SELECTION_SORT,
    SIZE,
    SPEED,
    SWAP,
} from "./helper/constants"

const SortingVisualizer = () => {
    const [list, setStateList] = useState([])
    const [algorithm, setAlgorithm] = useState(NONE)
    const [speed, setSpeed] = useState(DEFAULT_SPEED)
    const [running, setRunning] = useState(NOT_RUNNING)
    const [size, setSize] = useState(DEFAULT_LIST_SIZE)

    const speedRef = useRef();
    speedRef.current = speed;

    // to load intial list only once
    useEffect(() => {
        setStateList(generateArray(size))
    }, [size])

    const createNewList = () => {
        if (!running) {
            setStateList(generateArray(size))
        }
    }

    const onChange = (value, option) => {
        if (!running) {
            if (option == ALGORITHMS) {
                setAlgorithm(value)
            } else if (option == SIZE) {
                setSize(value)
            }
        }
        if (option == SPEED) {
            setSpeed(value)
        }
    }

    const start = async() => {
        if (running) {
            return;
        }
        setRunning(RUNNING)
        let moves = await getMoves()
        await visualize([...moves])
        await visualizeDone(moves)
        setRunning(NOT_RUNNING)
    }

    const getMoves = async() => {
        let moves = [];
        let newList = [...list]
        if (algorithm == BUBBLE_SORT) {
            moves = await bubbleSort(newList)
        } else if (algorithm == INSERTION_SORT) {
            moves = await insertionSort(newList)
        } else if (algorithm == SELECTION_SORT) {
            moves = await selectionSort(newList)
        } else if (algorithm == MERGE_SORT) {
            moves = await mergeSort(newList)
            console.log(moves)
        }
        return moves;
    }

    const visualize = async(moves) => {
        if (moves.length == 0) {
            return;
        }
        if (moves[0].length == 4) {
            await visualizeInRange(moves)
        } else {
            await visualizeBySwapping([...moves])
        }
    }

    const visualizeBySwapping = async(moves) => {
        while (moves.length > 0) {
            let currentMove = moves.shift();
            let indexes = [currentMove[0], currentMove[1]]
            let moveType = currentMove[2]
            await updateElementState(indexes, CURRENT)
            if (moveType == SWAP) {
                await updateList(indexes)
            }
            await updateElementState(indexes, NORMAL)
        }
    }

    const visualizeInRange = async(moves) => {
        let prevRange = []
        while (moves.length > 0 && moves[0].length == 4) {
            if (prevRange != moves[0][3]) {
                await updateElementState(prevRange, NORMAL)
                prevRange = moves[0][3]
                await updateElementState(moves[0][3], CURRENT)
            }
            await updateElementValue([moves[0][0], moves[0][1]])
            moves.shift()
        }
        console.log(moves)
        await visualize(moves)
    }

    const updateElementState = async(indexes, stateType) => {
        let newList = [...list]
        indexes.forEach(index => {
            newList[index].stateType = stateType
        })
        await setList(newList)
    }

    const updateElementValue = async(indexes) => {
        let newList = [...list]
        newList[indexes[[0]]].height = indexes[1]
        await setList(newList)
    }

    const updateList = async(indexes) => {
        swap(list, indexes[0], indexes[1])
        await setList(list)
    }

    const setList = async(newList) => {
        setStateList(newList)
        await pause(speedRef.current)
    }

    const visualizeDone = async(moves) => {
        if (moves.length == 0) {
            return
        }
        let i, indexes
        indexes = []
        i = 0
        while (i < size) {
            indexes.push(i)
            i++
        }
        await updateElementState(indexes, DONE)
    }

    return (
        <div>
            <Header
                generateNewArray = {createNewList}
                onChange = {onChange}
                start = {start}
                size = {size}
            />
            <Body 
                array = {list}
            />
            <Footer
                onChange = {onChange}
                size = {size}
                speed = {speed}
                running = {running}
            />
        </div>
    )
}

export default SortingVisualizer