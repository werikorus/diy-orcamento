/* eslint-disable react/jsx-key */
import React, { useRef, ReactNode } from "react";
import { Button } from "@mui/material";
import {
  ContatoForm,
  ProdutosForm,
  ServicosForm,
  CondicoesForm,
} from "./Fragments";

import { useDataForm } from "@/Hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import styles from "./Form.module.css";
import "swiper/css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type FormProps = {
  type: number;
}

export const Form = ({ type }: FormProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { onSubmitSlideForm } = useDataForm();

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

  const forms: ReactNode[] = [
    <ContatoForm />,
    <ProdutosForm />,
    <ServicosForm />,
    <CondicoesForm />,
  ];

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>
        {type == 0 ? "Novo Pedido" : "Novo Orçamento"}
      </h3>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={styles.swiper}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {forms.map((form, index) => (
          <SwiperSlide key={index}>{form}</SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttonContainer}>
        <Button onClick={goPrevSlide} variant="contained" size="small">
          <ArrowBackIosNewIcon />
        </Button>

        <Button onClick={goNextSlide} variant="contained" size="small">
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
};
