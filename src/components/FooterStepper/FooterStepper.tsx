"use client"

import React, { useState } from "react";
import styles from './FooterStepper.module.css'

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";



const steps = [
  "Contato",
  "Produtos",
  "Serviços",
  "Condições de pagamento"
];

export const FooterStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <footer className={styles.footerStepperContainer}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
    
            return (
              <Step
                key={label}
                {...stepProps}
                onClick={() => setActiveStep(activeStep)}
                className={styles.step}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </footer>
  );
};