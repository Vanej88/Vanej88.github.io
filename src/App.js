
import './sass/styles/main.scss';
import { useRoutes } from 'hookrouter';

//Componentes
import Home from './components/introduction'; 
import Cards from './components/hero'; 
import Tools from './components/tools'; 
import Acerca from './components/about';
import Contacto from './components/contact'; 

const routes = {
  '/': () => <Home/>,
  '/proyectos': () => <Cards/>,
  '/tools': () => <Tools/>,
  '/acerca': () => <Acerca/>,
  '/contacto': () => <Contacto />
  
}

function App(){
  const component = useRoutes(routes)

  return (
  <div className="App">
    {component} 
  </div>
  );
  
}

export default App;
