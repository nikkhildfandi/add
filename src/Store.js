import React, { createContext, useState } from 'react'

let sender = createContext()

const Store = (props) => {

    let [mode,setMode] = useState(true)

  return (
    <>
        <sender.Provider value={{mode,setMode}}>
            {props.children}
        </sender.Provider>
    </>
  )
}

export default Store
export {sender}