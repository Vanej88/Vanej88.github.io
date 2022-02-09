import Burger  from './Responsive/Burger';
import { GrReactjs, GrHtml5, GrCss3, GrGithub, GrJs, GrGrid } from "react-icons/gr"
import { FaBootstrap } from 'react-icons/fa';
import { VscTerminalLinux } from 'react-icons/vsc'; 
import { SiVisualstudiocode } from 'react-icons/si'; 

function Tools(){

    return(
        <div>  
        
            <Burger/>

            <div className="tool">
                <div className="tool__text-box">
                    <h2 className="tool__title">Estas son mis herramientas favoritas</h2>
                </div>
                <div className="tool__icon-box">
                    <span><GrReactjs className="tool-icon"/></span>
                    <span><GrHtml5 id="icon-style" className="tool-icon"/></span>  
                    <span><GrCss3 id="icon-style" className="tool-icon"/></span>  
                    <span><GrGithub className="tool-icon"/></span>  
                    <span><GrJs id="icon-style" className="tool-icon"/></span>  
                    <span><GrGrid id="icon-style" className="tool-icon"/></span>  
                    <span><FaBootstrap className="tool-icon"/></span>  
                    <span><VscTerminalLinux className="tool-icon"/></span>  
                    <span><SiVisualstudiocode className="tool-icon"/></span>  
                </div>
            </div>
                
            <div className="footer footer--tools">
                <span className="footer__msg">Made by Vanessa</span>
            </div>
        </div>
    )
}

export default Tools; 