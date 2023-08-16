import React, { useState } from 'react'
import '../styles/Child.css'

function Selection(props) {
    const [color, setColor] = useState({});
  return (
    <div className='fix-box' onClick={()=>{props.applyColor(setColor)}} style={{background: color.color}} data-testid={color.attribute}>
        <h2 className='subheading'>Selection</h2>
    </div>
  )
}

export default Selection