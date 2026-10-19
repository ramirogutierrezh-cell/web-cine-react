import { useEffect, useState } from 'react';
import PeliculaCard from './PeliculaCard';
import peliculas from '../data/peliculas';
import './Cartelera.css';

function obtenerColumnas() {
  if (window.innerWidth <= 672) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

function Cartelera() {
  const [columnas, setColumnas] = useState(obtenerColumnas);
  const [pagina, setPagina] = useState(0);
  const totalPaginas = Math.ceil(peliculas.length / columnas);
  const paginaActual = Math.min(pagina, totalPaginas - 1);
  const inicio = paginaActual * columnas;
  const peliculasVisibles = peliculas.slice(inicio, inicio + columnas);

  useEffect(() => {
    function actualizarColumnas() {
      setColumnas(obtenerColumnas());
    }

    window.addEventListener('resize', actualizarColumnas);
    return () => window.removeEventListener('resize', actualizarColumnas);
  }, []);

  return (
    <section id="cartelera" className="cartelera" aria-labelledby="cartelera-title">
      <h2 id="cartelera-title">Cartelera</h2>
      <div id="peliculas-lista" className="cartelera__grid" aria-live="polite">
        {peliculasVisibles.map((pelicula, index) => (
          <PeliculaCard key={pelicula.id} pelicula={pelicula} numero={inicio + index + 1} />
        ))}
      </div>
      <div className="cartelera__navegacion">
        <button
          type="button"
          aria-controls="peliculas-lista"
          disabled={paginaActual === 0}
          onClick={() => setPagina(paginaActual - 1)}
        >
          Anterior
        </button>
        <button
          type="button"
          aria-controls="peliculas-lista"
          disabled={paginaActual === totalPaginas - 1}
          onClick={() => setPagina(paginaActual + 1)}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}

export default Cartelera;
