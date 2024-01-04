import React, { useContext } from 'react'
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { sender } from '../Store';


const Navbar = () => {

    let {mode,setMode}=useContext(sender)

    let handleMode=()=>{
        setMode(!mode)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Gallery">Gallery</a>
                            </li>
                            <li className='nav-item'>
                                <button onClick={handleMode}>{mode ?<IoMoon /> :<IoMdSunny />}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar