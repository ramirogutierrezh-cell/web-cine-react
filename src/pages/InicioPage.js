import Header from '../components/Header';
import Cartelera from '../components/Cartelera';
import BannerCine from '../components/BannerCine';
import Servicios from '../components/Servicios';
import Ubicacion from '../components/Ubicacion';
import './InicioPage.css';

function InicioPage() {
  return (
    <>
      <Header />
      <main id="inicio" className="inicio-page">
        <h1 className="inicio-page__title">Inicio</h1>
        <Cartelera />
        <BannerCine />
        <Servicios />
        <Ubicacion />
      </main>
    </>
  );
}

export default InicioPage;
