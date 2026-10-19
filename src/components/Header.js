import LogoCine from './LogoCine';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <LogoCine />
      <nav className="site-header__nav" aria-label="Navegación principal">
        <span>Inicio</span>
        <a href="#cartelera">Cartelera</a>
        <a href="#servicios">Servicios</a>
        <a href="#ubicacion">Ubicación</a>
      </nav>
    </header>
  );
}

export default Header;
