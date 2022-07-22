import logo from '../media/corgi.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
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
                    <button className="button secondaryButton">Ingresar</button>
                </li>
                <li>
                    <button className="button secondaryButton">Registro</button>
                </li>
            
            </ul>
        </header>
    )
};

export default Header;