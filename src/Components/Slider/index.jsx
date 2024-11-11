import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SliderSection = styled.section`
  padding: 20px;
  /* background-color: #f5f5f5; */
  text-align: center;
`;

const SliderTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilização para o vídeo dentro do slide
const SlideVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export default function Slider() {
  return (
    <SliderSection>
      <SliderTitle>Sessão Slider</SliderTitle>

      <StyledSwiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <StyledSwiperSlide>
          <SlideVideo src="https://www.w3schools.com/html/mov_bbb.mp4" controls />
        </StyledSwiperSlide>
        
        <StyledSwiperSlide>
          <SlideVideo src="./calculator.mp4" controls />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <SlideVideo src="./calculator.mp4" controls />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <SlideVideo src="./calculator.mp4" controls />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <SlideVideo src="https://www.w3schools.com/html/mov_bbb.mp4" controls />
        </StyledSwiperSlide>
        
        {/* Adicione outros vídeos conforme necessário */}
      </StyledSwiper>
    </SliderSection>
  );
}
