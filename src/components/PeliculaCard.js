import './PeliculaCard.css';

function PeliculaCard({ pelicula }) {
  const { titulo, duracion, poster } = pelicula;

  return (
    <article className="pelicula-card">
      <div className="pelicula-card__poster">
        {poster ? <img src={poster} alt="" loading="lazy" /> : <span>Sin póster</span>}
      </div>
      <div className="pelicula-card__info">
        <h3>{titulo}</h3>
        <p>{duracion}</p>
      </div>
    </article>
  );
}

export default PeliculaCard;
