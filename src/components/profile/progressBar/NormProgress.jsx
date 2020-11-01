import React, { useState, useEffect } from 'react'
import { Maxbar, PContainer, PDiv, PIcon, Pplus, Progressbar, PText, Inner } from './style'
import taxi from '../../../assets/icons/taxi.png'
import plus from '../../../assets/icons/plus.png'
import minus from '../../../assets/icons/minus.png'

export default function NormProgress({ course, data, setData, index, user, icon }) {

    const [score, setScore] = useState(user[course])

    function handleClick(action) {
        switch (action) {
            case 'increment':
                user[course]++;
                data[index] = user
                setScore(score + 1)
                setData([...data])
                break;
            case 'decrement':
                user[course]--;
                data[index] = user
                setScore(score - 1)
                setData([...data])
                break;
            default:
                return
        }
    }

    return (
        <PContainer>
            <PDiv>
                <div className='kprass'>
                    <PText>{course}</PText>
                    <PText>{score}%</PText>
                </div>

                <Maxbar>
                    <Progressbar percent={score} />
                </Maxbar>
            </PDiv>
            <PIcon src={icon} />
            <br />
            <Inner>
                <button onClick={() => handleClick('decrement')}><Pplus src={minus} /></button>
                <button onClick={() => handleClick('increment')}><Pplus src={plus} /></button>
            </Inner>
        </PContainer>
    )
}
