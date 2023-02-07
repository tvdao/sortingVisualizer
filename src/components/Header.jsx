import React, {useState} from "react";

//components
import Algorithm from "./navbarComponents/Algorithm";

//bootstrap 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// constants
import {
    BUBBLE_SORT,
    DEFAULT_DROPDOWN_VALUE,
    INSERTION_SORT,
    MERGE_SORT,
    SELECTION_SORT,
} from "./helper/constants"

import "./Header.css";

const Header = ({generateNewArray, onChange, start, size}) => {

    const [dropDownState, setDropDownState] = useState({
        value: DEFAULT_DROPDOWN_VALUE
    })

    const algorithms = [
        {value: BUBBLE_SORT, name: "Bubble Sort"},
        {value: INSERTION_SORT, name: "Insertion Sort"},
        {value: SELECTION_SORT, name: "Selection Sort"},
        {value: MERGE_SORT, name: "Merge Sort"},
    ]

    const navOptionStyle = {
       "fontSize": 1.5 + "vw",
    }

    const brandStyle = {
       "fontSize": 3 + "vw",
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={brandStyle}>Sorting Visualizer</Navbar.Brand>
                <Nav className="justify-content-md-center" style={navOptionStyle}>
                    <Nav.Item><Nav.Link onClick={() => generateNewArray(size)}>Generate New Array</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link onClick={() => start()}>Run Algorithm</Nav.Link></Nav.Item>
                    <div className="algorithms">
                        <NavDropdown title={dropDownState.value} className="basic-nav-dropdown">
                            {algorithms.map((element, elementId) => {
                                return (
                                    <Algorithm 
                                        key = {elementId}
                                        value = {element.value}
                                        name = {element.name}
                                        onChange = {onChange}
                                        setDropDownState = {setDropDownState}
                                        style = {navOptionStyle}
                                    />
                                )
                            })}
                        </NavDropdown>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header