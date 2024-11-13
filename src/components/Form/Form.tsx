/* eslint-disable react/jsx-key */
"use client";
import React, { ReactNode } from "react";

import {
  ContatoForm,
  ProdutosForm,
  ServicosForm,
  CondicoesForm,
} from "./Fragments";

import { FooterStepper } from "../FooterStepper";
import { PreviewOrImpress } from "../PreviewOrImpress";
import { Footer } from "../Footer";
import { useMainDataContext } from "@/Hooks";
import { useDataForm } from "@/Hooks";

import styles from "./Form.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Form = () => {
  const { setCurrentSlideIndex } = useMainDataContext();
  const { onSubmbitForm } = useDataForm();

  const forms: ReactNode[] = [
    <ContatoForm />,
    <ProdutosForm />,
    <ServicosForm />,
    <CondicoesForm />,
    <PreviewOrImpress />,
  ];

  return (
    <>
      <div className={styles.formContainer}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className={styles.swiper}
          allowTouchMove={true}
          onSwiper={() => {
            setCurrentSlideIndex(0);
          }}
          onSlideChange={(swipe) => {
            setCurrentSlideIndex(swipe.activeIndex);
            onSubmbitForm(swipe.activeIndex);
          }}
        >
          {forms.map((form, index) => (
            <SwiperSlide key={index}>{form}</SwiperSlide>
          ))}
          <FooterStepper />
          <Footer />
        </Swiper>
      </div>
    </>
  );
};
