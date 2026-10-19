import { useState } from 'react';
import servicios from '../data/servicios';
import ServicioPanel from './ServicioPanel';
import ServicioModal from './ServicioModal';
import './Servicios.css';

function Servicios() {
  const [servicioAbierto, setServicioAbierto] = useState(null);

  return (
    <section id="servicios" className="servicios" aria-labelledby="servicios-title">
      <h2 id="servicios-title">Servicios</h2>
      <div className="servicios__lista">
        {servicios.map((servicio, indice) => (
          <ServicioPanel
            key={servicio.id}
            servicio={servicio}
            derecha={indice % 2 === 1}
            onAbrir={() => setServicioAbierto(servicio)}
          />
        ))}
      </div>
      {servicioAbierto && (
        <ServicioModal
          servicio={servicioAbierto}
          onCerrar={() => setServicioAbierto(null)}
        />
      )}
    </section>
  );
}

export default Servicios;
