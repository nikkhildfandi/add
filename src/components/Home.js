import React, { useContext } from 'react'
import { sender } from '../Store'

const Home = () => {

  let {mode,setMode}=useContext(sender)

  return (
    <>
        <div id='Home' className={`content bg-${mode ? 'light' : 'dark'} text-${mode ? 'dark' : 'light'}`}>
          <h1 className='pt-5'>Home</h1>
        </div>
    </>
  )
}

export default Home