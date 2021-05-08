import React from "react";
import "./Header.css";

const Header = ({generateNewArray, bubbleSort, selectionSort}) => {
    return (
        <div className="header">
            <div className="button-div">
                <p className="gen-array" onClick={() => {
                    generateNewArray();
                }}>Generate New Array</p>
            </div>
            <div className="button-div">
                <p className="buttons" onClick={() => {
                    bubbleSort();
                }}>Bubble Sort</p>
            </div>
            <div className="button-div">
                <p className="buttons" onClick={() => {
                    selectionSort();
                }}>Selection Sort</p>
            </div>
        </div>
    )
}

export default Header;