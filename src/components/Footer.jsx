import React from "react"

// components
import Slider from './footerComponents/Slider';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

// constants
import {
    SIZE,
    SIZE_MAX,
    SIZE_MIN,
    SIZE_STEP,
    SIZE_TITLE,
    SPEED,
    SPEED_MAX,
    SPEED_MIN,
    SPEED_STEP,
    SPEED_TITLE
} from "./helper/constants"

import "./Footer.css";

const Footer = ({onChange, size, speed, running}) => {

    const sliders = [
        { 
            name: SIZE_TITLE,
            min: SIZE_MIN,
            max: SIZE_MAX,
            step: SIZE_STEP,
            optionType: SIZE,
        },
        {
            name: SPEED_TITLE,
            min: SPEED_MIN,
            max: SPEED_MAX,
            step: SPEED_STEP,
            optionType: SPEED,
        }
    ]

    return (
        <>
            <Form className="footer">
                <Stack>
                    {sliders.map((slider, sliderId) => {
                        return (
                            <Slider 
                                key = {sliderId}
                                name = {slider.name}
                                min = {slider.min}
                                max = {slider.max}
                                step = {slider.step}
                                optionType = {slider.optionType}
                                onChange = {onChange}
                                running = {running}
                                val = {slider.optionType == SPEED ? speed : size}
                            />
                        )
                    })}
                </Stack>
            </Form>
        </>
    )
}

export default Footer