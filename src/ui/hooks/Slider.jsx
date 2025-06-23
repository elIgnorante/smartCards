import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = [
    {
        imgSrc:  '',
        title: 'Paso 1: Crea o elige un mazo',
        subtilte: 'Organiza tu conocimiento como quieras',
        description: 
            'Crea tus propios mazos de tarjetas personalizadas o elige entre cientos de mazos públicos creados por la comunidad o por expertos',
        categories: ['Paso 1'],
    },
    {
        imgSrc:  '',
        title: 'Paso 2: Estudia en modo memorizar',
        subtilte: 'Refuerza lo aprendido con técnica efectiva',
        description: 
            'Accede al modo estudio, donde podrás practicar con tarjetas una a una, repasarlas y comprobar tu progreso fácilmente',
        categories: ['Paso 2'],
    },
    {
        imgSrc:  '',
        title: 'Paso 3: Comparte o adquiere contenido premium',
        subtilte: 'Impulsa tu aprendizaje o ayuda a otros',
        description: 
            'Comparte tus mazos con la comunidad o mejora tu estudio accediendo a contenido premium creado por usuarios verificados o por el equipo del sitio',
        categories: ['Paso 3'],
    },
]


export default function Slider() {
     return (
    <Swiper
      modules={[Pagination]}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
}

