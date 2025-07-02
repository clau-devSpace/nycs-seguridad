import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Imagen1 from '../assets/images/imagen-oficina.jpeg';
import Imagen2 from '../assets/images/image-slider-2.jpg';
import Imagen4 from '../assets/images/image-slider-4.jpeg';
import Imagen5 from '../assets/images/image-slider-6.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="homeSwiper"
      >
        <SwiperSlide><img src={Imagen1} /></SwiperSlide>
        <SwiperSlide><img src={Imagen5} /></SwiperSlide>
        <SwiperSlide><img src={Imagen4} /></SwiperSlide>
        <SwiperSlide><img src={Imagen2} /></SwiperSlide>
      </Swiper>
    </>
  );
}
