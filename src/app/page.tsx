"use client"
import Home from "@/pages/Home";
import { GlobalStyles, createTheme, ThemeProvider } from "@mui/material";

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

//const firebaseConfig = {
//  apiKey: API_KEY_FIREBASE,
//  authDomain: "diy-orcamento-db.firebaseapp.com",
//  projectId: "diy-orcamento-db",
//  storageBucket: "diy-orcamento-db.firebasestorage.app",
//  messagingSenderId: "297744338646",
//  appId: APP_ID,
//  measurementId: MEASUREMENT_ID
//};

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "@keyframes mui-auto-fill": { from: { display: "block" } },
          "@keyframes mui-auto-fill-cancel": {
            from: { display: "block" },
          },
        }}
      />
      <Home />;
    </ThemeProvider>
  );
}
