import React from 'react'

const Counter = ({counter, inc_cntr, dec_cntr, reset_cntr}) => {
  return (
    <div className="App-header">
        <h2> Counter App - React </h2>      
        {/* <h2 style={{display: counter<0? :'none'}}>  {counter} </h2> */}
        {counter < 0 ? <h3>Minimum count reached</h3> : <h2>{counter}</h2>}
        <div className='btn_container'>
            <div className='btn_container_1'>
                <button onClick={inc_cntr}> Increment </button>
                <button onClick={dec_cntr}> Decrement </button>
            </div>
            <button onClick={reset_cntr}>Reset</button>
        </div>
        <p>Designed by Poorani Davidraj</p>
    </div>
  )
}

export default Counter
