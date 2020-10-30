import React from 'react'
import { Maxbar, PContainer, PDiv, PIcon, Progressbar, PText } from './style'
import taxi from '../../../assets/icons/taxi.png'

export default function NormProgress({course,percent,icon}) {
    return (
        <PContainer>
            <PDiv>
                <div className='kprass'>
                    <PText>{course}</PText>
                    <PText>{percent}%</PText>
                </div>
                <Maxbar>
                    <Progressbar percent={percent} />
                </Maxbar>
            </PDiv>
            <PIcon src={icon} />
        </PContainer>
    )
}
