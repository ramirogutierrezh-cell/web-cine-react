import { useEffect, useState } from 'react';
import PeliculaCard from './PeliculaCard';
import './Cartelera.css';

function obtenerColumnas() {
  if (window.innerWidth <= 672) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

function Cartelera() {
  const apiKey = 'a376cefe8db49d5e6a2748bfc596228f';
  const [columnas, setColumnas] = useState(obtenerColumnas);
  const [pagina, setPagina] = useState(0);
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const totalPaginas = Math.max(1, Math.ceil(peliculas.length / columnas));
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

  useEffect(() => {
    async function cargarPeliculas() {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es-ES&region=BO&page=1`
      );
      const lista = await respuesta.json();
      const primerasPeliculas = lista.results.slice(0, 6);
      const resultado = await Promise.all(
        primerasPeliculas.map(async (pelicula) => {
          const respuestaDetalle = await fetch(
            `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=${apiKey}&language=es-ES`
          );
          const detalle = await respuestaDetalle.json();
          const horas = Math.floor(detalle.runtime / 60);
          const minutos = detalle.runtime % 60;

          return {
            id: pelicula.id,
            titulo: pelicula.title,
            poster: pelicula.poster_path ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}` : null,
            duracion: detalle.runtime ? `${horas} h ${String(minutos).padStart(2, '0')} min` : 'Duración no disponible',
          };
        })
      );

      setPeliculas(resultado);
      setCargando(false);
    }

    cargarPeliculas();
  }, [apiKey]);

  return (
    <section id="cartelera" className="cartelera" aria-labelledby="cartelera-title">
      <h2 id="cartelera-title">Cartelera</h2>
      {cargando && <p role="status">Cargando cartelera...</p>}
      {!cargando && peliculas.length === 0 && <p>No hay películas disponibles.</p>}
      {!cargando && peliculas.length > 0 && (
        <>
          <div id="peliculas-lista" className="cartelera__grid" aria-live="polite">
            {peliculasVisibles.map((pelicula) => (
              <PeliculaCard key={pelicula.id} pelicula={pelicula} />
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
        </>
      )}
      <aside className="cartelera__credito" aria-label="Créditos de TMDB">
        <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer" aria-label="TMDB">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt="TMDB"
          />
        </a>
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </aside>
    </section>
  );
}

export default Cartelera;
