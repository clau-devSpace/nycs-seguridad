import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Imagen1 from '../assets/images/image-slider1.jpg';
import Imagen2 from '../assets/images/image-slider-2.jpg';
import Imagen3 from '../assets/images/image-slider-3.jpg';
import Imagen4 from '../assets/images/image-slider-4.jpeg';
import Imagen5 from '../assets/images/image-slider-6.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
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
        className="mySwiper"
      >
        <SwiperSlide><img src={Imagen1}/></SwiperSlide>
        <SwiperSlide><img src={Imagen2}/></SwiperSlide>
        <SwiperSlide><img src={Imagen3}/></SwiperSlide>
        <SwiperSlide><img src={Imagen4}/></SwiperSlide>
        <SwiperSlide><img src={Imagen5}/></SwiperSlide>
      </Swiper>
    </>
  );
}
