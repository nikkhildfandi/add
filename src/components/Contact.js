import React, { useContext } from 'react'
import { sender } from '../Store'

const Contact = () => {

  let {mode,setMode}=useContext(sender)

  return (
    <>
        <div id='Contact' className={`content bg-${mode ? 'light' : 'dark'} text-${mode ? 'dark' : 'light'}`}>
          <h1 className='pt-5'>Contact</h1>
        </div>
    </>
  )
}

export default Contact