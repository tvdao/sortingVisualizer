import React, {useState} from "react";
import {arrayOperations} from "./arrayOperations";
import Array from "./components/Array"
import "./SortingVisualizer.css"

const SortingVisualizer = () => {

    const [arrayState, setArrayState] = useState({
        array: arrayOperations(150, 600)
    });

    const bubbleSort = (array) => {
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
                }, 15)
            }
        }
        
        setArrayState({
            array: array
        })
    }

    return (
        <div className="body">
            <button onClick={()=>bubbleSort(arrayState.array)}>AA</button>
            <Array 
                array = {arrayState.array}
            />
        </div>
    )
}

export default SortingVisualizer;