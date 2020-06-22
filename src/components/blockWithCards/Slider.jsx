/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import './_slider.scss';

const SimpleSwiper = () => {
  const arr = ['Slide 1', 'Slide 2', 'Slide 3'] // This array is for example
    .map((e) => (
      <div>
        {e}
      </div>
    ));

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: 'true',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  return (
    <div className="slider">
      <Swiper {...params}>
        {arr}
      </Swiper>
    </div>
  );
};

export default SimpleSwiper;
