import imagen4d from '../assets/servicios/servicio1.jpg';
import imagenSalas from '../assets/servicios/servicio2.jpg';
import imagenCafe from '../assets/servicios/servicio3.jpg';

const servicios = [
  {
    id: '4d-emotion',
    nombre: '4D E-Motion',
    resumen: 'Una experiencia de cine con movimiento y efectos especiales.',
    imagen: imagen4d,
    imagenAlt: 'Personas disfrutando una función de cine en 4D',
    descripcion: 'Vive la película con asientos que se mueven y efectos que acompañan algunas escenas. Consulta la cartelera para conocer qué funciones están disponibles en este formato.',
  },
  {
    id: 'salas-plus',
    nombre: 'Salas Plus',
    resumen: 'Más comodidad para disfrutar cada función.',
    imagen: imagenSalas,
    imagenAlt: 'Butacas reclinables en una sala de cine',
    descripcion: 'Disfruta la película en un espacio pensado para estar cómodo, con butacas reclinables y atención durante la función. La disponibilidad depende del cine y de la película elegida.',
  },
  {
    id: 'multicine-cafe',
    nombre: 'Multicine Café',
    resumen: 'Comidas y bebidas para acompañar tu visita.',
    imagen: imagenCafe,
    imagenAlt: 'Café y pastel en la cafetería de un cine',
    descripcion: 'Antes de entrar a la sala, pasa por Multicine Café y elige algo para comer o beber. Los productos disponibles pueden variar según el cine.',
  },
];

export default servicios;
