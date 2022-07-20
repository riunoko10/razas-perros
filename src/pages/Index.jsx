import borderCollie from '../media/BorderCollie.jpg';
import rhodesian from '../media/rhodesian.jpg';
import logo from '../media/corgi.png';
import CardRazaPerros from '../components/CardRazasPerros';
import { Link } from 'react-router-dom';

function Index(){
    return (
        <div className="container">
        <header>
            <ul className="navbar">
                <li>
                    <Link to="/">
                    <img src= { logo } alt="Logo Pagina" className="logo"/>
                    </Link>
                </li>
                <li>
                    <Link to="/nuevo-post">
                    <button className="button mainButton">Nuevo Post</button>
                    </Link>
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
                    <CardRazaPerros nombreRaza='BorderCollie' imagen={ borderCollie } />
                    <CardRazaPerros nombreRaza='Rhodesian' imagen= { rhodesian } />
                </ul>
            </section>
            <section></section>
            <section></section>
        </main>
      
    </div>
    );
}

export default Index;