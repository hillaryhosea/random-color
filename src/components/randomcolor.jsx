import React, { useState } from 'react'
import './randomcolor.css'

export const Randomcolor = () => {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility (length){
    return Math.floor(Math.random()*length)
  }

  function handlCreateRandomRgbColor (){}
  function handleCreateRandomHexColr (){
    const hex = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 'A', 'B','c','D','E','F']

    let hexColor = '#'
    for(let i=0; 1<6; i++){
      hexColor += hex[randomColorUtility (hex.length)]
    }
    console.log(hexColor);
    setColor(hexColor)
  }

  return (
    <div
    style={{
      height:'100vh',
      background: color,
    }} 
    >
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=>setTypeOfColor('rgba')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColr : handlCreateRandomRgbColor}> Genarate Random Color</button>
    </div>
  )
}
