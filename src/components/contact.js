import Burger  from './Responsive/Burger';
import { FaLaptopCode } from 'react-icons/fa'; 
import { GrMailOption, GrLinkedin, GrGithub } from 'react-icons/gr'; 

function Contacto() {
    return(
        <div>
            <Burger/>
            
            <div className="contact">
                <h2 className="contact__title">Contacto</h2>
                <p className="contact__text">Los buenos proyectos se logran cuando hay colaboración. Me gustaría escuchar tu propuesta, seguir aprendiendo y aportar lo que sé.</p>
                <button className="button contact__btn"><GrMailOption className="contact__icon"/><a className="contact__link" href="mailto:vanej88@gmail.com?subject=Oferta%20Front-End">Escríbeme</a></button>
                <p className="contact__text">Puedes visitar mi perfil en LinkedIn y mi repo en GitHub:</p>
                <div className="contact-profile-box">
                    <a className="button contact__profile" href="https://www.linkedin.com/in/vanessa-jes%C3%BAs-g/"><GrLinkedin className="contact__icon contact__icon--profile"/></a>
                    <a className="button contact__profile" href="https://github.com/vanej88"><GrGithub className="contact__icon contact__icon--profile"/></a>
                </div>
            </div>

            <div className="footer footer--contact">
                <span className="footer__msg">Made by Vanessa</span>
            </div>
        </div>
    )
}

export default Contacto;