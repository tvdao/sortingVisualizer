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
                        height = {column.height}
                        onColumn = {column.onColumn}
                        end = {column.end}
                    />
                )
            })}
        </div>
    )
}

export default Array;