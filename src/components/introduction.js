
import Burger  from './Responsive/Burger';
import imagenes from '../images/images'; 
import { FaLaptopCode } from 'react-icons/fa'; 
import { GrCode } from 'react-icons/gr'; 


function Home() {
   

    return  (
        
        <div className="home">
    
            <Burger/>

            <div className="intro">
                <div className="intro-left">
                    <h2 className="intro__title">Hola, soy Vanessa.</h2>
                    <p className="intro__description">Estoy buscando mi primera experiencia laboral como Front-End Developer. Sigo aprendiendo más sobre JavaScript, React y Node.js</p>
                </div>
                <div className="intro__right">
                    <img className="intro__img" src={imagenes.code}></img><a className="author" href='https://www.freepik.com/vectors/people'>People vector created by pikisuperstar - www.freepik.com</a>
                </div>
            </div>

            <div className="footer">
                <span className="footer__msg">Made by Vanessa</span>
            </div>

        </div>
        
    ) 


    
    
}

export default Home; 