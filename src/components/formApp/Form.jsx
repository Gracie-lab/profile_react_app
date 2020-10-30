import React from 'react'
import './countdown/style.css'

function Form(){
    return (
        <div>
            <h1>Form Component</h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form