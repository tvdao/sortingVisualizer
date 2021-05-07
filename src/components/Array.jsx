import React from "react";
import Column from "./Column";
import "./Array.css";

const Array = ({array}) => {
    return (
        <div className = "array">
            {array.map((column, columnId) => {
                return (
                    <Column 
                        key = {columnId}
                        height = {column}
                    />
                )
            })}
        </div>
    )
}

export default Array;