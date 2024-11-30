/* eslint-disable @typescript-eslint/no-require-imports */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { getDatabase } from "firebase/database";

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "diy-orcamento-db.firebaseapp.com",
  projectId: "diy-orcamento-db",
  storageBucket: "diy-orcamento-db.firebasestorage.app",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  databaseURL: "https://diy-orcamento-db-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { app, auth, database, firebaseConfig };

//config example https://github.com/Daniel-Vinicius/letmeask/blob/main/src/services/firebase.ts
