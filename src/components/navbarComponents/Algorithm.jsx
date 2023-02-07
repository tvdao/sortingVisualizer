import React from "react"
import NavDropdown from "react-bootstrap/NavDropdown"
import {
    ALGORITHMS
} from "../helper/constants"

const Algorithm = ({value, name, onChange, setDropDownState, style}) => {
    
    return (
        <NavDropdown.Item as="button" onClick={() => {
            setDropDownState({value: name})
            onChange(value, ALGORITHMS)
        }} style={style}>{name}</NavDropdown.Item>
    )
}

export default Algorithm