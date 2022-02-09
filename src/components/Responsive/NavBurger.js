import React from "react"
import { NavWrapper } from "./NavWrapper"
import { FaLaptopCode } from 'react-icons/fa'; 

function NavBurger({ open }) {
  return (
    <NavWrapper open={open}>
        {/* <div className="logo-box">
            <button className="button logo__btn">
                <a className="logo__link" href="/">
                <FaLaptopCode className="logo-icon"/> 
                </a>
            </button>
        </div> */}
        <a className="nav-mobile__link" href="/">Home</a>
        <a className="nav-mobile__link" href="/proyectos">Proyectos</a>
        <a className="nav-mobile__link" href="/tools">Herramientas</a>
        <a className="nav-mobile__link" href="/acerca">Acerca de mi</a>
        <a className="nav-mobile__link" href="/contacto">Contacto</a>
    </NavWrapper>
  )
}

export default NavBurger; 