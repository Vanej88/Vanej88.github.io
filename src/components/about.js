import Burger  from './Responsive/Burger';
import { FaLaptopCode } from 'react-icons/fa'; 
import imagenes from '../images/images';

function Acerca() {
    return(
        <div>
 
            <Burger/>

            <div className="photo-box">
                <img className="photo" src={imagenes.photo}></img>
            </div>

            <div className="bio">
                <p className="bio__text">Soy una persona divertida, curiosa y aventurera. Me gusta conocer nuevos lugares y personas de otras culturas. También me gusta mucho el arte, especialmente la música y la danza. Tengo gran interés por temas sociales y mi principal meta es poder usar la tecnología como herramienta para el bienestar de los otros.</p>
                <p className="bio__text">Soy Psicóloga de profesión y tengo un Máster en Arteterapia, profesiones que me definen muy bien. Sin embargo, he decidido incorporar otro rama de conocimiento y por eso estoy aprendiendo sobre el sector IT. He hecho cursos online de Codecademy, W3Schools y Udemy de forma autodidacta y también realicé un BootCamp presencial de Desarrollo Front-End, ahí perfeccioné el uso de JavaScript y aprendí React. Actualmente, sigo poniendo en práctica estas habilidades y también estudio Node Js.</p>
                <p className="bio__text">Mi visión es ser cada vez mejor y poder integrar lo aprendido. Creo que con la programación se puede dar respuesta a las necesidades de las personas de una manera eficaz y práctica.</p>
            </div>

            <div className="footer">
                <span className="footer__msg">Made by Vanessa</span>
            </div>
        </div>
    )
}

export default Acerca;