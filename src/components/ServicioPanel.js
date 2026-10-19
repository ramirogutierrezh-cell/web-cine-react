import './ServicioPanel.css';

function ServicioPanel({ servicio, derecha, onAbrir }) {
  return (
    <article className={`servicio-panel${derecha ? ' servicio-panel--derecha' : ''}`}>
      <h3>{servicio.nombre}</h3>
      <p>{servicio.resumen}</p>
      <img src={servicio.imagen} alt={servicio.imagenAlt} loading="lazy" />
      <button type="button" onClick={onAbrir} aria-label={`Ver detalles de ${servicio.nombre}`}>
        Ver detalles
      </button>
    </article>
  );
}

export default ServicioPanel;
