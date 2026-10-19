import './PeliculaCard.css';

function PeliculaCard({ pelicula, numero }) {
  const { titulo, duracion, estilo } = pelicula;

  return (
    <article className="pelicula-card">
      <div className={`pelicula-card__poster pelicula-card__poster--${estilo}`} aria-hidden="true">
        <span>{String(numero).padStart(2, '0')}</span>
      </div>
      <div className="pelicula-card__info">
        <h3>{titulo}</h3>
        <p>{duracion}</p>
      </div>
    </article>
  );
}

export default PeliculaCard;
