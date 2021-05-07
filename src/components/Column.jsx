import React from "react";
import "./Column.css";

const Column = ({height, onColumn, end}) => {

    const style = {
        height: height + 'px'
    }

    const classStyle = [
        "column",
        onColumn ? "on-column" : "",
        end ? "end" : ""
    ]

    return (
        <div className = {classStyle.join(" ")} style={style}>
        </div>
    )
}

export default Column;