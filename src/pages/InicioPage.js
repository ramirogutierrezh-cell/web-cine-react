import Header from '../components/Header';
import Cartelera from '../components/Cartelera';
import BannerCine from '../components/BannerCine';
import Servicios from '../components/Servicios';
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
        <section id="ubicacion" className="inicio-page__pendiente" aria-labelledby="ubicacion-title">
          <h2 id="ubicacion-title">Ubicación</h2>
        </section>
      </main>
    </>
  );
}

export default InicioPage;
