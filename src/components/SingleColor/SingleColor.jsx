import React, { useEffect, useState } from 'react'
import './SingleColor.scss'
import rgbToHex from '../../utils'
 
const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false)
    const color = rgb.join(',')
    const hex = rgbToHex(...rgb)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => clearTimeout(timeout)
    },[alert])
    
  return (
    <div className='single-color'>
        <div 
        className="item" 
        style={{backgroundColor: `rgb(${color})`}} 
        onClick={() => {
            setAlert(true) 
            navigator.clipboard.writeText(hex)
            } }>
            <p style={{color: index > 10 ? 'white' : 'black'}}>{weight}%</p>
            <p style={{color: index > 10 ? 'white' : 'black'}}>{hex}</p>
            {alert && <p style={{color: index > 10 ? 'white' : 'black'}}>copied to clipboard</p>}
        </div>
    </div>
  )
}

export default SingleColor