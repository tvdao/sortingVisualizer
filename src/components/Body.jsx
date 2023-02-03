import React from "react";
import Column from "./Column";
import {ARRAY_WIDTH} from "./helper/constants";

import "./Body.css"

const Body = ({array}) => {
    return (
        <div className="body" style={{height:array.length+'vh'}}>
            <div className="array" style={{width:ARRAY_WIDTH+"%"}}>
                {array.map((element, elementId) => {
                    return (
                        <Column 
                            key = {elementId}
                            height = {element.height}
                            width = {(ARRAY_WIDTH - 20) / array.length}
                            stateType = {element.stateType}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body