import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const SliderSection = styled.section`
  padding: 20px;
  text-align: center;
`;

const SliderTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
  /* background-color: pink; */
  box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: 0px -83px 131px 65px rgba(0, 0, 0, 1) inset;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const SlidePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
`;

const SlideIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  display: ${({ isPlaying }) => (isPlaying ? "block" : "none")};
`;

export default function Slider() {
  const [isPlaying, setIsPlaying] = useState({}); // Gerencia estado de reprodução por slide

  const handlePlay = (index) => {
    setIsPlaying((prevState) => ({ ...prevState, [index]: true }));
  };

  return (
    <SliderSection>
      <SliderTitle>Sessão Slider</SliderTitle>

      <StyledSwiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        lazy={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <StyledSwiperSlide>
          {/* Slide com poster */}
          {!isPlaying[0] && (
            <SlidePoster
              src="/desktop.png" // Caminho da imagem no public
              alt="Pré-visualização do vídeo"
              onClick={() => handlePlay(0)}
            />
          )}
          <SlideIframe
            isPlaying={isPlaying[0]}
            src="https://www.youtube.com/embed/R23ykNiU4bk"
            title="Calculator React"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
          />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          {!isPlaying[1] && (
            <SlidePoster
              src="/login_lindo.png"
              alt="Pré-visualização do vídeo"
              onClick={() => handlePlay(1)}
            />
          )}
          <SlideIframe
            isPlaying={isPlaying[1]}
            src="https://www.youtube.com/embed/M8l8g8qbdyM?si=lVEN3KFELJu7-GZ_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          {!isPlaying[2] && (
            <SlidePoster
              src="/lanchonete-prefeito.png"
              alt="Pré-visualização do vídeo"
              onClick={() => handlePlay(2)}
            />
          )}
          <SlideIframe
            isPlaying={isPlaying[2]}
            src="https://www.youtube.com/embed/z0y-Vec0EAE?si=7u-VQELHrWqknoiR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            loading="lazy"
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          {!isPlaying[3] && (
            <SlidePoster
              src="/ecommerce-coffee.png"
              alt="Pré-visualização do vídeo"
              onClick={() => handlePlay(3)}
            />
          )}
          <SlideIframe
            isPlaying={isPlaying[3]}
            src="https://www.youtube.com/embed/RMRiPYlvUpg?si=Dpvnuy_mO2O3qyKB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          />
        </StyledSwiperSlide>
      </StyledSwiper>
    </SliderSection>
  );
}
