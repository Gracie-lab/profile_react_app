import React, { useState, useEffect } from 'react'
import './style.css'

function Countdown(){

    const [counter,setCounter] = useState(15)
    const [name,setName] = useState("Elliot")
    const [names, setNames] = useState(["grace", "ife", "tony", "iclass"])
    const timer = ()=>{
        setCounter(counter-1)
    }
    
    
    useEffect(()=>{
        if(counter > 0 )
        setTimeout(timer,1000)
    },[timer])

    useEffect(()=>{
        setName(names[counter])
    },[counter])

    // useEffect(() => {
    //     shout("WAAAAAW  WAAAA")
    // }, [light])

    function handleClick(action){
        switch(action){
            case 'increment':
                return setCounter(counter + 1)
            case 'decrement':
                return setCounter(counter - 1)
            default:
                return
        }
    }
    

    return(
        <div>
            <h1 className='countdown__h1'>Countdown <span>{counter}</span></h1>
            <button className="countdown__button" onClick={()=>handleClick('decrement')}>Decrease</button>
            <button className="countdown__button" onClick={()=>handleClick('increment')}>Increase</button>
        
            <h2>Name <span>{name}</span></h2>
            <button onClick={()=>handleClick('change')}>left</button>
            <button onClick={()=>handleClick('change')}>right</button>
        
        </div>
    )
}

export default Countdown