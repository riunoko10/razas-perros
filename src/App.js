import './styles/App.css';
import borderCollie from './media/BorderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
import logo from './media/corgi.png';

function App() {
  return (
    <div className="App">

<header>
    <ul className="navbar">
        <li><img src= { logo } alt="Logo Pagina" className="logo"/></li>
        <li>
            <button className="button mainButton">Nuevo Post</button>
        </li>
        <li>
            <div className="buscar">
                <input type="text" placeholder="Buscar raza"/>
                <i className="fas fa-search button iconoBuscar"></i>
            </div>
        </li>
        <li>
            <button className="button secondaryButton">ingresar</button>
        </li>
        <li>
            <button className="button secondaryButton">Registro</button>
        </li>
     
    </ul>
   </header>

   <main>
    <section>
        <h1>Razas de Perros</h1>
        <ul className="breedCardContainer">
            <li className="breedCard">
                <div className="contenedor-imagen">
                    <img src={ borderCollie } alt="Border Collie"/>
                </div>
                <span className="breedTitle">Border Collie</span>
                
            </li>
            <li className="breedCard">
                <div className="contenedor-imagen">
                    <img src={ rhodesian } alt="Rhodesian"/>
                </div>
                <span className="breedTitle">Rhodesian</span>
                
            </li>
        </ul>
    </section>
    <section></section>
    <section></section>
   </main>
      
    </div>
  );
}

export default App;
