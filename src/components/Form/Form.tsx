/* eslint-disable react/jsx-key */
"use client"
import React, { useRef, ReactNode } from "react";
import {
  ContatoForm,
  ProdutosForm,
  ServicosForm,
  CondicoesForm,
} from "./Fragments";

import { PreviewOrImpress } from "../PreviewOrImpress";

import { useDataForm } from "@/Hooks";
import { Footer } from "../Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import styles from "./Form.module.css";
import "swiper/css";

type FormProps = {
  type: number;
}

export const Form = ({ type }: FormProps) => {
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
    <PreviewOrImpress />
  ];

  return (
    <>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>
          {type == 0 ? "Novo Pedido" : "Novo Orçamento"}
        </h3>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className={styles.swiper}
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {forms.map((form, index) => (
            <SwiperSlide key={index}>{form}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer nextSlide={goNextSlide} prevSlide={goPrevSlide} />
    </>
  );
};
