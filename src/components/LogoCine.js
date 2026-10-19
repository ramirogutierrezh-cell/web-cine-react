import './LogoCine.css';

const logoSrc = 'https://multicine.static.cinesync.io/images/theater/cinema/MULTICINE_LOGO_1024X1024_Mesa_de_trabajo_1_(1).jpg';

function LogoCine({ grande = false }) {
  return (
    <img
      className={`logo-cine${grande ? ' logo-cine--grande' : ''}`}
      src={logoSrc}
      alt="Multicine"
      width="1024"
      height="1024"
    />
  );
}

export default LogoCine;
