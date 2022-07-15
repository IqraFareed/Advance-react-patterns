import React from 'react'

const CustomInput = React.forwardRef((props ,ref) => {
  return (
    <input
    ref={ref}
   {...props}
    />
  )
})

export default CustomInput