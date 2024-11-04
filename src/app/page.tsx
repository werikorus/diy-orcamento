import Home from "@/pages/Home";
import { MainDataContextProvider } from "@/Contexts";
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

//const firebaseConfig = {
//  apiKey: "AIzaSyCyIxGygtTf-DvIR7MrSLQMt1G6-P1OyFY",
//  authDomain: "diy-orcamento-db.firebaseapp.com",
//  projectId: "diy-orcamento-db",
//  storageBucket: "diy-orcamento-db.firebasestorage.app",
//  messagingSenderId: "297744338646",
//  appId: "1:297744338646:web:f6dd3c6a2f523b25408377",
//  measurementId: "G-YJRZL8MYH7"
//};

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default function App() {
  //console.log(analytics);
  return (
    <MainDataContextProvider>
      <Home />
    </MainDataContextProvider>
  );
}
