import borderCollie from '../media/BorderCollie.jpg';
import rhodesian from '../media/rhodesian.jpg';
import logo from '../media/corgi.png';
import CardRazaPerros from '../components/CardRazasPerros';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

function Index(){
    return (
        
            <section>
                <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                    <CardRazaPerros nombreRaza='BorderCollie' imagen={ borderCollie } linkpagina='/bodercollie'/>
                    <CardRazaPerros nombreRaza='Rhodesian' imagen= { rhodesian } linkpagina='/rhodesian'/>
                </ul>
            </section>
            
    );
}

export default Index;