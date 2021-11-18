import React, { useState } from "react"
import { FaLaptopCode } from 'react-icons/fa'; 
import { HeaderBurger } from "./HeaderBurger";
import NavBurger from "./../Responsive/NavBurger";
import BtnBurger from "./../Responsive/BtnBurger";

function Burger() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open); 
    }

    return(
        <HeaderBurger>
            <a className="logo__link" href="/">
            <FaLaptopCode className="logo-icon"/> 
            </a>
            <NavBurger open={open}/>
            <BtnBurger open={open} handleClick={handleClick}/>
        </HeaderBurger>
    )
}

export default Burger; 