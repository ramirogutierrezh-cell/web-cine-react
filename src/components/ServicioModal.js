import { useEffect, useRef } from 'react';
import './ServicioModal.css';

function ServicioModal({ servicio, onCerrar }) {
  const dialogo = useRef(null);

  useEffect(() => {
    const modal = dialogo.current;
    modal.showModal();
    return () => modal.close();
  }, []);

  return (
    <dialog
      ref={dialogo}
      className="servicio-modal"
      onClose={() => {
        if (!dialogo.current.open) onCerrar();
      }}
      aria-labelledby="servicio-modal-title"
    >
      <h2 id="servicio-modal-title">{servicio.nombre}</h2>
      <p>{servicio.descripcion}</p>
      <button type="button" onClick={() => dialogo.current.close()}>
        Cerrar
      </button>
    </dialog>
  );
}

export default ServicioModal;
