import React from "react"
import {NORMAL, CURRENT, HIGHLIGHT} from "./helper/constants";
import "./Column.css"

// to change css class for color of columns
const getState = (state) => {
    if (state == NORMAL) {
        return 'column-default'
    } else if (state == CURRENT) {
        return 'column-current'
    } else if (state == HIGHLIGHT) {
        return 'column-highlight'
    } else {
        return 'column-done'
    }
}

const Column = ({height, width, stateType}) => {
    
    const style = {
        height: height + "vh",
        width: width + "%",
    }

    const classNames = [
        "column",
        getState(stateType),
    ]

    return (
        <div className = {classNames.join(" ")} style={style}>
        </div>
    )
}

export default Column