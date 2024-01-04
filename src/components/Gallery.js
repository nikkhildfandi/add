import React, { useContext } from 'react'
import { sender } from '../Store'

const Gallery = () => {

  let {mode,setMode}=useContext(sender)

  return (
    <>
        <div id='Gallery' className={`content bg-${mode ? 'light' : 'dark'} text-${mode ? 'dark' : 'light'}`}>
          <h1 className='pt-5'>Gallery</h1>
        </div>
    </>
  )
}

export default Gallery