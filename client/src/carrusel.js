import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './css/style.css'

const CarouselHome = () => {
  const slides = [
    {
      id: 1,
      titulo: "Participa en tus votaciones",
      descripcion: "Emite tu voto de forma segura y transparente desde cualquier lugar.",
      imagen: "https://www.socialistsanddemocrats.eu/sites/default/files/styles/header_background/public/2023-04/shutterstock_2029276058_crop.jpg?itok=EyMk4kKK",
    },
    {
      id: 2,
      titulo: "Resultados en tiempo real",
      descripcion: "Consulta los resultados de manera inmediata y confiable.",
      imagen: "https://www.argentina.gob.ar/sites/default/files/styles/foto_encabezado_con_imagen/public/imagenEncabezado/49_votaciones_vinieta_0.png?itok=MO9iXp9I",
    },
    {
      id: 3,
      titulo: "Transparencia y confianza",
      descripcion: "Tu voto cuenta. Garantizamos privacidad y seguridad en cada elección.",
      imagen: "https://elcentralmedia.com/wp-content/uploads/2024/04/Votar.jpg",
    },
  ];

  return (
    <div className="carrusel">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="carrusel">
            <img
                src={slide.imagen}
                alt={slide.titulo}
                className="img-carrusel"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{slide.titulo}</h2>
                <p className="text-lg max-w-2xl">{slide.descripcion}</p>
            </div>
            </div>
            </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default CarouselHome;
