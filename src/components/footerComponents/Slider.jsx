import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
    SIZE
} from '../helper/constants'

const Slider = ({ name, min, max, step, optionType, onChange, running, val }) => {

    const [value, setValue] = useState(val)

    return (
        <Form.Group as={Row} className="justify-content-md-left mb-2">
            <Col xs="1"></Col>
            <Col xs="1">{name}</Col>
            <Col xs="3">
                <Form.Range
                    value = {value}
                    min = {min}
                    max = {max}
                    step = {step}
                    onChange={e => {
                        let newVal = e.target.value
                        onChange(newVal, optionType)
                        setValue(newVal)
                    }}
                    disabled = {optionType == SIZE ? running : false}
                />
            </Col>
            <Col xs="1">
                <Form.Control
                    value = {value}
                    readOnly
                />
            </Col>
        </Form.Group>
    )
}

export default Slider