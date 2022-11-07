import React, { useState } from 'react'
import { useDispatch } from "react-redux";

function AddNumbers(props) {
    const addByNum = 10;
    const removeByNum = 5;
    return (
        <div>
            <h1>AddNumbers</h1>
            <div className='buttonContainer'>
                <button className='btn0' onClick={() => props.Increment()}> AddNumbers</button>
                <button className='btn2' onClick={() => props.Decrement()}>RemooveNumbers</button><br></br>
                <button className='btn0' onClick={() => props.IncrementByAmount(addByNum)}>Add By {addByNum}</button>
                <button className='btn2' onClick={() => props.DecrementByAmount(removeByNum)}>Remoove By {removeByNum}</button>
                <button className='btn0' onClick={() => props.ResetCount()}>Reset All</button><br></br>
            </div>


        </div>
    )
}

export default AddNumbers