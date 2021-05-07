import React from "react";
import "./Column.css";

const Column = ({height}) => {

    const style = {
        height: height + 'px'
    }

    const classStyle = [
        "column"
    ]

    return (
        <div className = {classStyle.join(" ")} style={style}>
        </div>
    )
}

export default Column;