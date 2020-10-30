import React from 'react'
import { InnerCircle, OuterCircle } from './style'

export default function Average({percent}) {
    return (
        <OuterCircle>
            <InnerCircle>
                <h1>{Math.ceil(percent)}%</h1>
                <p>Average<br /> Score</p>
            </InnerCircle>
        </OuterCircle>
    )
}
