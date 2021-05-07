import React from "react";
import "./Header.css";

const Header = ({generateNewArray, array, bubbleSort}) => {
    return (
        <div className="header">
            <div className="button-div">
                <p className="gen-array" onClick={() => {
                    generateNewArray();
                }}>Generate New Array</p>
            </div>
            <div className="button-div">
                <p className="buttons" onClick={() => {
                    bubbleSort(array);
                }}>Bubble Sort</p>
            </div>
            <div className="button-div">
                <p className="buttons">Merge Sort</p>
            </div>
        </div>
    )
}

export default Header;