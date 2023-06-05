import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { MainVisualType } from './model/mainVisual';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './MainVisual.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const API_URL = '/json/mainVisual.json';
const mainVisualInit: MainVisualType = {
  id: 0,
  imgUrl: '',
  ex: '',
};

export const MainVisual = () => {
  const [mainVisual, setMainVisual] = useState<MainVisualType[]>([
    mainVisualInit,
  ]);
  const fetchData = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMainVisual(data));
  }, [mainVisual]);
  useEffect(fetchData, []);
  // swiper navigation
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className='mainVisual'>
      <h3 className='hide'>메인슬라이드</h3>

      <Swiper
        modules={[Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {mainVisual?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.imgUrl} alt={item.ex} />
            </SwiperSlide>
          );
        })}
        {/* button */}
        <button type='button' className='btnPrev' ref={navigationPrevRef}>
          <IoIosArrowBack>prev</IoIosArrowBack>
        </button>
        <button type='button' className='btnNext' ref={navigationNextRef}>
          <IoIosArrowForward>next</IoIosArrowForward>
        </button>
      </Swiper>
    </section>
  );
};
