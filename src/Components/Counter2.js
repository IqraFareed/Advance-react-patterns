import React from 'react'

const Counter2 = (props) => {
  return (
    <button onClick={props.incCount} style={{color:'green'}}>{props.count}</button>
  )
}

export default Counter2