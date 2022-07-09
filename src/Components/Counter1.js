import React from 'react'

const Counter1 = (props) => {
  return (
    <button onClick={props.incCount} style={{color:'red'}}>{props.count}</button>
  )
}

export default Counter1