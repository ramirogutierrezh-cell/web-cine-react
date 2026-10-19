import LogoCine from './LogoCine';
import './BannerCine.css';

function BannerCine() {
  return (
    <section className="banner-cine" aria-labelledby="banner-cine-title">
      <h2 id="banner-cine-title">Tu próxima historia empieza aquí.</h2>
      <div className="banner-cine__marca">
        <LogoCine grande />
      </div>
    </section>
  );
}

export default BannerCine;
