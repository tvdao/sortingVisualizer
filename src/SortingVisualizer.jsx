import React, {useState} from "react";
import {arrayOperations} from "./arrayOperations";
import Array from "./components/Array"
import Header from "./components/Header";
import "./SortingVisualizer.css"

const SortingVisualizer = () => {

    const [arrayState, setArrayState] = useState({
        array: arrayOperations(150, 600)
    });

    const bubbleSort = () => {
        let array = arrayState.array;
        const arrLength = array.length;
        for (let i = 0; i < arrLength-1; i++) {
            for (let j = 0; j < arrLength - i - 1; j++) {
                setTimeout( () => {
                    array[j].onColumn = true;
                    array[j+1].onColumn = true;
                    if (array[j].height > array[j+1].height) {
                        let temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                    if (j+1 === (arrLength-i-1)) {
                        array[j+1].onColumn = false;
                        array[j+1].end = true;
                    }
                    setArrayState({
                        array: array
                    })
                    array[j].onColumn = false;
                    array[j+1].onColumn = false;
                })
            }
        }
    }

    const selectionSort = () => {
        let array = arrayState.array;
        const arrLength = array.length;
        for (let i = 0; i < arrLength-1; i++) {
            let min_index = i;
            setTimeout( () => {
                array[i].onColumn = true;
                for (let j = i+1; j < arrLength; j++) {
                    array[j].onColumn = true;
                    if (array[j].height < array[min_index].height) {
                        min_index = j;
                    }
                    setArrayState({
                        array: array
                    })
                    array[j].onColumn = false;
                }
                let temp = array[i];
                array[i] = array[min_index];
                array[min_index] = temp;
                array[i].onColumn = false;
                array[i].end = true;
                if (i === arrLength - 2) {
                    array[i+1].end = true;
                }
                setArrayState({
                    array: array
                })
            })
        }
    }

    const generateNewArray = () => {
        setArrayState({
            array: arrayOperations(150, 600)
        })
    }

    return (
        <div>
            <Header 
                generateNewArray = {generateNewArray}
                bubbleSort = {bubbleSort}
                selectionSort = {selectionSort}
            />
            <div className="body">
                <Array 
                    array = {arrayState.array}
                />
                <h1>{arrayState.array[0].height + " " + arrayState.array[1].height}</h1>
            </div>
        </div>
    )
}

export default SortingVisualizer;