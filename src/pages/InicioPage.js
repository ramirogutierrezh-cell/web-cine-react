import Header from '../components/Header';
import Cartelera from '../components/Cartelera';
import './InicioPage.css';

function InicioPage() {
  return (
    <>
      <Header />
      <main id="inicio" className="inicio-page">
        <h1 className="inicio-page__title">Inicio</h1>
        <Cartelera />
        <section id="servicios" className="inicio-page__pendiente" aria-labelledby="servicios-title">
          <h2 id="servicios-title">Servicios</h2>
        </section>
        <section id="ubicacion" className="inicio-page__pendiente" aria-labelledby="ubicacion-title">
          <h2 id="ubicacion-title">Ubicación</h2>
        </section>
      </main>
    </>
  );
}

export default InicioPage;
