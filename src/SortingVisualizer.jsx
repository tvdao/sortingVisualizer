import React, {useState} from "react";
import {arrayOperations} from "./arrayOperations";
import {bubbleSort} from "./algorithms/bubbleSort";
import Array from "./components/Array"

const SortingVisualizer = () => {
    const [arrayState, setArrayState] = useState({
        array: arrayOperations(300, 800)
    })
    // const p = () => {
    //     setArrayState({
    //         array: bubbleSort(arrayState.array)
    //     })
    // }

    // onClick={() => p()}
    return (
        <div>
            <Array 
                array = {arrayState.array}
            />
        </div>
    )
}

export default SortingVisualizer;