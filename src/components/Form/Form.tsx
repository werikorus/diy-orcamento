/* eslint-disable react/jsx-key */
"use client"
import React, { ReactNode } from "react";
import {
  ContatoForm,
  ProdutosForm,
  ServicosForm,
  CondicoesForm,
} from "./Fragments";

import { PreviewOrImpress } from "../PreviewOrImpress";
import { Footer } from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Form.module.css";
import "swiper/css";

export const Form = () => {

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
          allowTouchMove={false}
        >
          {forms.map((form, index) => (
            <SwiperSlide key={index}>{form}</SwiperSlide>
          ))}
          <Footer />
        </Swiper>
      </div>
    </>
  );
};
