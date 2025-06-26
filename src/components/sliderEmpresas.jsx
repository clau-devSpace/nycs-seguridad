import React, {useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import EnergiaDelSur from '../assets/images/logoEnergiadelSur.png';
import Pecom from '../assets/images/pecom_color_logotipo.svg';
import Novomet from '../assets/images/novomet-logo.png';
import Crane from '../assets/images/logo-crane.svg';
import Ulterra from '../assets/images/Ulterra-logo.jpeg';
import styles from './sliderEmpresas.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderEmpresas() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  
  return (
    <>
      <Swiper
        key={isDesktop ? "desktop" : "mobile"}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.logoEmpresa} src={EnergiaDelSur} alt="Energía del Sur" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.logoEmpresa} src={Novomet} alt="Novomet" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.logoEmpresa} src={Crane} alt="Crane" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.logoEmpresa} src={Ulterra} alt="Ulterra" />
        </SwiperSlide>
         <SwiperSlide className={styles.swiperSlide}>
          <img className={styles.logoEmpresa} src={Pecom} alt="Pecom" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}