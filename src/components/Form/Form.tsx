import React, { useRef } from "react";
import { Button } from "@mui/material";
import { ContatoForm } from "./Fragments/ContatoForm/ContatoForm";
import { ProdutosForm } from "./Fragments/ProdutosForm/ProdutosForm";
import { Servicos } from "./Fragments/Servicos/Servicos";
import { Condicoes } from "./Fragments/Condicoes/Condicoes";
import { useDataForm } from "@/Hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import styles from "./Form.module.css";
import "swiper/css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type typeForm = {
  type: number;
}

export const Form = ({ type }: typeForm) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { onSubmitSlideForm  } = useDataForm();

  const goNextSlide = () => {
    if (swiperRef.current) {
      onSubmitSlideForm(swiperRef.current.activeIndex);
      swiperRef.current.slideNext();
    }
  };

  const goPrevSlide = () => {
    if (swiperRef.current) {
      onSubmitSlideForm(swiperRef.current.activeIndex);
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>
        {type == 0 ? "Novo Pedidos" : "Novo Orçamento"}
      </h3>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={styles.swiper}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <ContatoForm />
        </SwiperSlide>

        <SwiperSlide>
          <ProdutosForm />
        </SwiperSlide>

        <SwiperSlide>
          <Servicos />
        </SwiperSlide>

        <SwiperSlide>
          <Condicoes />
        </SwiperSlide>
      </Swiper>

      <div className={styles.buttonContainer}>
        <Button
          onClick={goPrevSlide}
          variant="contained"
          size="small"
        >
          <ArrowBackIosNewIcon />
        </Button>

        <Button
          onClick={goNextSlide}
          variant="contained"
          size="small"
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
};
