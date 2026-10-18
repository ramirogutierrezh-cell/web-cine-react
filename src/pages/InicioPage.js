import Header from '../components/Header';
import './InicioPage.css';

function InicioPage() {
  return (
    <>
      <Header />
      <main id="inicio" className="inicio-page">
        <h1>Inicio</h1>
        <section id="cartelera" aria-labelledby="cartelera-title">
          <h2 id="cartelera-title">Cartelera</h2>
        </section>
        <section id="servicios" aria-labelledby="servicios-title">
          <h2 id="servicios-title">Servicios</h2>
        </section>
        <section id="ubicacion" aria-labelledby="ubicacion-title">
          <h2 id="ubicacion-title">Ubicación</h2>
        </section>
      </main>
    </>
  );
}

export default InicioPage;
