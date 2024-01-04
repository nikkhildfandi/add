import React, { useContext } from 'react'
import { sender } from '../Store'

const About = () => {

  let {mode,setMode}=useContext(sender)

  return (
    <>
        <div id='About' className={`content bg-${mode ? 'light' : 'dark'} text-${mode ? 'dark' : 'light'}`}>
          <h1 className='pt-5'>About</h1>
        </div>
    </>
  )
}

export default About