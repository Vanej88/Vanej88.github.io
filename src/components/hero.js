import Burger  from './Responsive/Burger';
import imagenes from '../images/images';
import { FaLaptopCode } from 'react-icons/fa'; 
import { FaAngleDown } from "react-icons/fa";

function Cards() {

    return (
        <div>
           
            <Burger/>

            <div className="hero">
            
                <h2 className="hero-msg" id="proyectos">Este es mi trabajo</h2>
                <button className="hero-btn">
                    <FaAngleDown className="hero-icon"/>
                </button>

            </div>
            
            <div className="card-box">

                <div className="card">

                    <div className="card__box-img">
                        <a href="https://vanej88.github.io/Airbnb-practice/"><img className="card__img" src={imagenes.project2} alt="project2"></img></a>
                    </div>
                    <div className="card__box-text">
                        <p className="card__title">Fake AirBnB</p>
                        <p className="card__description">Maquetación de una página web que muestra diversas opciones de pisos y challets para vacacionar. Está hecha tanto en versión desktop como versión Mobile.</p>
                    </div>

                </div>

                <div className="card">

                    <div className="card__box-img">
                        <a href="https://vanej88.github.io/Rick-Morty/"><img className="card__img" src={imagenes.project1} alt="project1"></img></a>
                    </div>
                    <div className="card__box-text">
                        <p className="card__title">Rick and Morty's</p>
                        <p className="card__description">Página web donde puedes filtrar la búsqueda de los personajes de la serie 'Rick and Morty'. Está hecha tanto en versión desktop como versión Mobile.</p>
                    </div>

                </div>

                <div className="card">

                    <div className="card__box-img">
                        <img className="card__img" src={imagenes.project4} alt="project4"></img>
                    </div>
                    <div className="card__box-text">
                        <p className="card__title">Adopt a Dog</p>
                        <p className="card__description">Es una aplicación que permite la búsqueda de diversas de perros. Este proyecto fue hecho con Vanilla JavaScript en versión desktop y Mobile.</p>
                    </div>

                </div>

                <div className="card">

                    <div className="card__box-img">
                        <img className="card__img" src={imagenes.project3} alt="project3"></img>
                    </div>
                    <div className="card__box-text">
                        <p className="card__title">Movia APP</p>
                        <p className="card__description">Es una aplicación que permite la búsqueda de diversas películas. Este proyecto fue hecho en React.</p>
                    </div>

                </div>

            </div>
               
            <div className="footer footer--hero">
                <span className="footer__msg">Made by Vanessa</span>
            </div>
        </div>
    )
}

export default Cards; 